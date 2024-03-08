import { prismadb } from '@/lib/prismadb';
import { LeadMagnet } from '@prisma/client';
import React from 'react';
import { DEFAULT_LEAD_MAGNET } from './lead-magnet-constants';
import LeadMagnetNotFound from '@/components/LeadMagnetNotFound';
import LeadMagnetEditorContainer from './components/LeadMagnetEditorContainer';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';

interface LeadMagnetEditorParams {
  params: {
    leadMagnetId: string[];
  };
}

async function LeadMagnetEditorPage({ params }: LeadMagnetEditorParams) {
  const leadMagnetId = params.leadMagnetId?.length > 0 ? params.leadMagnetId[0] : null;

  console.log("leadMagnetId", leadMagnetId);

  let leadMagnet: LeadMagnet | null = null;
  if (!leadMagnetId) {
    // Create a new LeadMagnet with a new ID and default values
    leadMagnet = await createNewLeadMagnet();
  } else {
    leadMagnet = await prismadb.leadMagnet.findUnique({
      where: {
        id: leadMagnetId,
      },
    });
  }

  if (!leadMagnet) {
    return <LeadMagnetNotFound returnLink="/lead-magnets" />;
  }

  return <LeadMagnetEditorContainer leadMagnet={leadMagnet} />;
}

export default LeadMagnetEditorPage;

async function createNewLeadMagnet() {
  const newSlug = generateUniqueSlug(); // Function to generate a new unique slug

  // Create a new LeadMagnet with a new ID, default values, and the new slug
  return await prismadb.leadMagnet.create({
    data: {
      ...DEFAULT_LEAD_MAGNET,
      id: generateUniqueId(),
      slug: newSlug,
    },
  });
}

// Function to generate a unique ID using uuid
function generateUniqueId(): string {
  return uuidv4();
}

// Function to generate a unique slug using slugify
function generateUniqueSlug(): string {
  // here the base slug string
  const baseString = 'uchiha';

  // Combine the base string with a unique identifier (e.g., timestamp or another UUID)
  const uniqueString = `${baseString}-${Date.now()}-${uuidv4()}`;

  // Generate the slug
  const slug = slugify(uniqueString, {
    lower: true, // Convert to lowercase
    remove: /[*+~.()'"!:@]/g, // Remove special characters
  });

  return slug;
}
