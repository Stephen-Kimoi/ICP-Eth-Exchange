// import createReActor from "@re-actor/core"
import { createReActor } from "@ic-reactor/react";
import { canisterId, idlFactory, hello } from "declarations/hello"


export const { 
  useActorStore, 
  useAuthStore, 
  useAuthClient, 
  useQueryCall, 
  useUpdateCall 
} = createReActor<typeof hello>({
  idlFactory, 
  canisterId, 
  withDevtools: true
}) 






