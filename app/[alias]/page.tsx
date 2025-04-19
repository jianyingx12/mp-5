import { redirect } from "next/navigation";
import { getUrl } from "@/lib/getUrlByAlias";

export default async function RedirectAlias({
    params,
  }: {
    params: Promise<{ alias: string }>;
  }) {
    const { alias } = await params;
  
    const url = await getUrl(alias);
  
    if (!url) return redirect("/");
  
    return redirect(url);
}
  