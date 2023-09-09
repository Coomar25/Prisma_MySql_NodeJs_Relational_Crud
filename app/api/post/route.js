// url: http://localhost:3000/api/post
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try{
        const body = await request.json();
        const {title, description} = body;

        const newPost = await prisma.post.create({
            data:{
                title,
                description
            }
        });

        return NextResponse.json({
            message : "Post has been successfully added"
        })

    }catch(err){
        return NextResponse.json({message: "Error inserting post", err}, { status: 500 })
    }
}


export const GET = async () => {
    try{
        const GetPost = await prisma.post.findMany(); //yeha post method hoena hai post model hooo na jukkene thea
        return NextResponse.json(GetPost)
    }catch(err){
        return NextResponse.json({message: "Error fetting all post", err}, { status: 500 })
    }
}




