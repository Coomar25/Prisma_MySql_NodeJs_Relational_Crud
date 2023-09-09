// url: http://localhost:3000/api/posts/123
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const GetPost = await prisma.post.findUnique({
      where: {
        id
      },
    });

    if (!GetPost) {
      return NextResponse.json(
        {
          message: "Post with that id not found",
        },
        {
          status: 404, // Return a 404 status code for not found
        }
      );
    }

    return NextResponse.json(GetPost);
  } catch (err) {
    console.error("Error Getting post of desired id", err);
    return NextResponse.json(
      {
        message: "Error Getting post of desired id",
        error: err.message,
      },
      {
        status: 500, // Return a 500 status code for server error
      }
    );
  }
};
