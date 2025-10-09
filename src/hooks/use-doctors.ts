" use client"

import { createDoctor, getDoctors } from "@/lib/actions/doctors"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useGetDoctors() {

    const result = useQuery({
        queryKey: ["getDoctors"],
        queryFn: getDoctors,
    })

    return result
}


export function useCreateDoctor() {

    const queryClient = useQueryClient()
    const result = useMutation({
        mutationFn: createDoctor,
        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey: ["getDoctors"] })
        },
        onError: () => {
            console.log("Doctor created failed")
        }
    })

    return result
}

export function useUpdateDoctor() {
    
}