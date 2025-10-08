import { useParams } from "@tanstack/react-router";

export default () => {
  const { councilorId } = useParams({ from: "/vereador/:councilorId" });
  return <h1>Vereador especifico {councilorId}</h1>;
};
