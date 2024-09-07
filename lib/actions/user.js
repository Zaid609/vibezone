export const deleteUser = async (id) => {
  try {
    // Connect to the database
    await connectToDB();

    console.log(`Attempting to delete user with clerkId: ${id}`);

    // Find and delete the user by their Clerk ID
    const user = await User.findOneAndDelete({ clerkId: id });

    if (!user) {
      console.log(`User with clerkId ${id} not found.`);
      throw new Error(`User with clerkId ${id} not found`);
    }

    console.log(`User with clerkId ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error('User deletion failed');
  }
};