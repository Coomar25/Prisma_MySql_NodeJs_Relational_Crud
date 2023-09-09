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
        status: 500,
      }
    );
  }
};



export const PATCH = async (request, {params}) => {
    try{
        const body = await request.json();
        const {title, description} = body;
        const {id} = params;

        const updatePost = await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        });
        if (!updatePost) {
            return NextResponse.json(
              {
                message: "Post with that id not updated at all",
              },
              {
                status: 404, // Return a 404 status code for not found
              }
            );
          }
        return NextResponse.json(updatePost)

    }catch(err){
        return NextResponse.json({message: "Error updating post", err}, { status: 500 })
    }
}



export const DELETE = async (request, { params }) => {
    try {
      const { id } = params;
      const existingPost = await prisma.post.findUnique({
        where: {
          id,
        },
      });
  
      if (!existingPost) {
        return NextResponse.json(
          {
            message: "Post not found. Delete operation aborted.",
          },
          {
            status: 404,
          }
        );
      }
  
      await prisma.post.delete({
        where: {
          id,
        },
      });
  
      return NextResponse.json({
        message: "Delete operation has been successful.",
      });
    } catch (err) {
      console.error("Error deleting post", err);
  
      return NextResponse.json(
        {
          message: "Error deleting post",
          error: err.message,
        },
        {
          status: 500,
        }
      );
    }
  };
  
