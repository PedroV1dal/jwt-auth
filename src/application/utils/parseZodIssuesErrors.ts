import { z } from "zod";

export function parseZodIssues(issues: z.core.$ZodIssue[]) {
  return issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
    code: issue.code,
  }));
}
