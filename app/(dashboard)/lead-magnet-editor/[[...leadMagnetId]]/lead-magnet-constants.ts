import { LeadMagnet } from "@prisma/client";

export const DEFAULT_LEAD_MAGNET: LeadMagnet ={
    name:"New LeadMagnet",
    status: "draft",
    draftBody:"",
    draftTitle:"",
    draftSubtitle:"",
    draftPrompt:"",
    draftFirstQuestion:"",
    draftEmailCapture:"",
    publishedBody:"",
    publishedTitle:"",
    publishedSubtitle:"",
    publishedPrompt:"",
    publishedFirstQuestion:"",
    publishedEmailCapture:"",
    createdAt: new Date(),
    updatedAt: new Date(),
    publishedAt: null,
    slug:null,
    pageViews:0,
    id:"",
    userId:""
}