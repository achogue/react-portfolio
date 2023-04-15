// import Icon from "@mdi/react";
// import { mdiLoading } from "@mdi/js";

const CommonLoading = ({ color, pixelSize = 60 }) => (
    <div
        style={{
            position: "absolute",
            top: `calc(50% - ${pixelSize / 2}px)`,
            left: `calc(50% - ${pixelSize / 2}px)`,
        }}>
        <div>
            <Icon
                path={"loading..."}
                size={`${pixelSize}px`}
                style={{ color: color || "black" }}
                spin={2}
            />
        </div>
    </div>
);

export { CommonLoading };
