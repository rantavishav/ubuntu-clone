import { RightClickMenu } from "@/components/rightClickMenu";
import Ubuntu from "@/components/Ubuntu";
import useContextMenu from "@/hooks/useContextMenu";

export default function Home() {
  const { clicked, points, handleOpenContextMenu } = useContextMenu();

  return (
    <div onContextMenu={(e) => handleOpenContextMenu(e)}>
      <Ubuntu />

      <RightClickMenu active={clicked} points={points} />
    </div>
  );
}
