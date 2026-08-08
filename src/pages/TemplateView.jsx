import { Suspense, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getTemplateById } from "../templates/registry";

export default function TemplateView() {
  const { id } = useParams();
  const template = getTemplateById(id);

  useEffect(() => {
    if (template?.status === "ready") {
      document.title = `${template.name} — Wedding Invitation`;
    }
    return () => {
      document.title = "Wedding Invitation Templates";
    };
  }, [template]);

  if (!template || template.status !== "ready") {
    return <Navigate to="/" replace />;
  }

  const TemplateComponent = template.component;

  return (
    <Suspense fallback={null}>
      <TemplateComponent />
    </Suspense>
  );
}
