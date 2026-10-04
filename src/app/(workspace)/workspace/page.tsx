import { redirect } from "next/navigation";

export default function Workspace() {
  return (
    redirect('/workspace/dashboard')
  );
}
