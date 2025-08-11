'use server'

import { auth } from '@clerk/nextjs/server';

export async function setUserRole(formData) {
  const { userId } = await auth();

  if (!userId){
    throw new Error('Unauthorized')
  }

  // FInd user in our database
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if(!user) throw new Error('User not found in database');
}