"use server"

import { Gender } from "@prisma/client"
import { prisma } from "../prisma"
import { generateAvatar } from "../utils"
import { revalidatePath } from "next/cache"


export async function getDoctors (){
    
    try {
        const doctors = await prisma.doctor.findMany({
            include: {
                _count: { select: { appointments: true } }
            },
            orderBy: {
               createdAt: "desc"
            }
        })
        return doctors.map((doctor) => ({
            ...doctor,
            appointmentsCount: doctor._count.appointments
        })) 
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch doctors")
    }




}


interface CreateDoctorParams {
    name: string;
    email: string;
    phone: string;
    speciality: string;
    gender: Gender;
    isActive: boolean;
}

export async function createDoctor (input: CreateDoctorParams){
    try {
        if(!input.name || !input.email){
            throw new Error("Name and email are required")
        }

        const doctor = await prisma.doctor.create({
            data: {
                ...input ,
                imageUrl: generateAvatar(input.name, input.gender)
            }
        })

        revalidatePath("/admin")

        return doctor
    } catch (error:any) {
        console.log(error)

        if(error?.code === "P2002"){
            throw new Error("Email already exists")
        }
        throw new Error("Failed to create doctor")
    }
}

interface UpdateDoctorInput extends Partial<CreateDoctorParams>{
    id: string;
}

export async function updateDoctor(input: UpdateDoctorInput){
    try {
        
    } catch (error) {
        
    }
}