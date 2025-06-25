"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui/button";
import { authClient } from "@/src/lib/auth-client";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/authentication");
            },
          },
        })
      }
    >
      Sair
    </Button>
  );
};

export default SignOutButton;
