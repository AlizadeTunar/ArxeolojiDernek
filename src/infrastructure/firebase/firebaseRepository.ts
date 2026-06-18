import type { ArchaeologyRepository } from "../repositories/localRepository";

// Firebase integration point:
// Implement this repository with Firestore/Storage calls and keep the same contract
// so presentation code can switch data sources without structural changes.
export class FirebaseArchaeologyRepository implements Partial<ArchaeologyRepository> {
  readonly status = "ready-for-integration";
}
