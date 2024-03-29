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
    // Create a new LeadMagnet
    leadMagnet = await createNewLeadMagnet();
  } else {
    // Fetch existing LeadMagnet
    leadMagnet = await prismadb.leadMagnet.findUnique({
      where: {
        id: leadMagnetId,
      },
      select: {
        id: true,
        userId: true,
        name: true,
        status: true,
        slug: true,
        publishedTitle: true,
        draftTitle: true,
        publishedSubtitle: true,
        draftSubtitle: true,
        publishedPrompt: true,
        draftPrompt: true,
        publishedBody: true,
        draftBody: true,
        publishedFirstQuestion: true,
        draftFirstQuestion: true,
        publishedEmailCapture: true,
        draftEmailCapture: true,
        createdAt: true,
        updatedAt: true,
        publishedAt: true,
        pageViews: true,
        
      }, 
    });
  }

  if (!leadMagnet) {
    return <LeadMagnetNotFound returnLink="/lead-magnets" />;
  }

  return <LeadMagnetEditorContainer leadMagnet={leadMagnet} />;
}

export default LeadMagnetEditorPage;

async function createNewLeadMagnet(): Promise<LeadMagnet> {
  const newSlug = generateUniqueSlug();

  // Create a new LeadMagnet with default values and new slug
  const newLeadMagnet = await prismadb.leadMagnet.create({
    data: {
      ...DEFAULT_LEAD_MAGNET,
      id: generateUniqueId(),
      slug: newSlug,
      updatedAt: new Date(), // Include initial updatedAt value
    },
  });

  return newLeadMagnet;
}

function generateUniqueId(): string {
  return uuidv4();
}

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
