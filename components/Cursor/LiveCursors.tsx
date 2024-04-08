import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";
import { COLORS } from "@/assets/constants";
import { useOthers } from "@/liveblocks.config";

function LiveCursors() {
  const others = useOthers()
  return others.map((user, presence) => {
    if (user == null || !user.presence?.cursor) {
        return null;
      }

    return (
      <Cursor
        key={user.presence.cursor.x}
        color={COLORS[Number(user?.connectionId) % COLORS.length]}
        x={user.presence.cursor.x}
        y={user.presence.cursor.y}
        message={user.presence?.message || ''}
      />
    );
  });
}

export default LiveCursors;
