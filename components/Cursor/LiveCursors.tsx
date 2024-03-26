import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";
import { COLORS } from "@/assets/constants";

function LiveCursors({ others }: LiveCursorProps) {
  return others.map((user) => {
    if (user == null || !user.presence?.cursor) {
        return null;
      }

    return (
      <Cursor
        // key={connectionId}
        color={COLORS[Number(user?.connectionId) % COLORS.length]}
        x={user.presence.cursor.x}
        y={user.presence.cursor.y}
        message={user.presence.message}
      />
    );
  });
}

export default LiveCursors;
