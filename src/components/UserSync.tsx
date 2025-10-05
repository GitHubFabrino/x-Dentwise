"use client"

import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

function UserSync() {
    const { isSignedIn , isLoaded } = useUser();

    useEffect(() => {
      const handleSyncUser = async () => {
        if (isLoaded && isSignedIn) {
            try {
                await syncUser();
            } catch (error) {
                console.log("Error in UserSync: ", error);
            }
        }
      }

      handleSyncUser();
    }, [isLoaded, isSignedIn]);

    return null;
}

export default UserSync

