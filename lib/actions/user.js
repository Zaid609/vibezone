import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const createOrUpdateUser = async (id, first_name, last_name, image_url, email_addresses, username) => {
  try {
    await connectToDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id }, // Search by clerkId
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address, // Use the first email
          username: username,
        },
      },
      {
        upsert: true, // Create the document if it doesn't exist
        new: true,    // Return the new document after update
      }
    );

    return user; // Return the updated or created user
  } catch (error) {
    console.error("Error creating or updating user:", error);
    throw new Error('User update failed');
  }
};
export const deleteUser = async (id) => {
    try {
        await connectToDB();
    
        await User.findOneAndDelete({ clerkId: id });
        } catch (error) {
            console.error(error);

            throw new Error('User deletion failed');
        }
    }
    