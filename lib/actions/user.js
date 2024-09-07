import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const createOrUpdateUser = async (id, first_name, last_name, image_url, email_addresses, username) => {
  try {
    // Connect to the database
    await connectToDB();

    console.log(`Attempting to create or update user with clerkId: ${id}`);

    // Find and update the user by their Clerk ID, or create a new one if it doesn't exist
    const user = await User.findOneAndUpdate(
      { clerkId: id }, // Search by Clerk ID
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address, // Use the first email address
          username: username,
        },
      },
      {
        upsert: true, // Create the document if it doesn't exist
        new: true,    // Return the new document after update
      }
    );

    console.log(`User with clerkId ${id} created or updated successfully.`);
    return user;
  } catch (error) {
    console.error("Error creating or updating user:", error);
    throw new Error('User update failed');
  }
};

export const deleteUser = async (id) => {
  try {
    // Connect to the database
    await connectToDB();

    console.log(`Attempting to delete user with clerkId: ${id}`);

    // Find and delete the user by their Clerk ID
    const user = await User.findOneAndDelete({ clerkId: id });

    if (!user) {
      console.log(`User with clerkId ${id} not found in the database.`);
      throw new Error(`User with clerkId ${id} not found`);
    }

    console.log(`User with clerkId ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting user:", error.message); // Log the error message
    throw new Error(`User deletion failed: ${error.message}`); // Return a more specific error message
  }
};