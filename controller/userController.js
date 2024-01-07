import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const testuser = (req, res) => {
  return res.send("hello from a contrller");
};

export const createUser = async (req, res) => {
  const { email, name } = req.body;
  console.log(req.body);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return res.status(200).json([user]);
  } catch (error) {
    console.error(error);
  }
};

export const addProfile = async (req, res) => {
  const { userId, bio } = req.body;
  console.log("userId:", userId);
  console.log("bio:", bio);
  try {
    const profile = await prisma.profile.create({
      data: {
        bio,
        userId,
      },
    });

    res.status(201).json({ profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding profile" });
  }
};

export const createPost = async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error("Prisma error:", error);
    res.status(500).json({ error: "Error creating post" });
  }
};

export const getUsersDataById = async (req, res) => {
  const userId = parseInt(req.params.id);
  console.log(userId);
  try {
    const users = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        posts: true,
      },
    });
    res.status(200).json({ users });
  } catch (error) {
    console.error("Prisma error:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};
