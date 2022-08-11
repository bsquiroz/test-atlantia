import { FC } from "react";
import Chart from "react-apexcharts";
import { PresenceShare } from "../../interfaces";
import "./styles.css";

interface Props {
    presenceShare: PresenceShare[];
}

export const DiagramPresenceSha: FC<Props> = ({ presenceShare }) => {
    const names = presenceShare.map((presence) => presence.name);
    const presenceSha = presenceShare.map((presence) => presence.presenceShare);

    return (
        <div className="container_presenceShare bg_white">
            <h2 className="title titleSeccion color_blue_dark">
                Presence Share by Product
            </h2>
            <Chart
                type="pie"
                width={"100%"}
                height={"100%"}
                series={presenceSha}
                options={{
                    labels: names,
                    tooltip: {
                        y: {
                            formatter: (v) => `${v}`,
                        },
                    },
                }}
            ></Chart>
        </div>
    );
};
