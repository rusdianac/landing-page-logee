import React from "react";
import "./StatsSection.css"; // import file CSS untuk styling
import warehouse from "../assets/images/warehouse.png";
import pelanggan from "../assets/images/pelanggan.png";
import retention from "../assets/images/retention.png";
import pengiriman from "../assets/images/pengiriman.png";
import { ProgressScore1, ProgressScore2, ProgressScore3, ProgressScore4 } from "./ProgressScore.js";

function StatsSection() {
  return (
    <section className="status">
      <div className="status-item">
        <img src={pengiriman} alt="icon" style={{ width: "50px" }} />
        <h7>
          <ProgressScore1 />
        </h7>
        <p>Pengiriman Selesai</p>
      </div>
      <div className="status-item">
        <img src={pelanggan} alt="icon" style={{ width: "50px" }} />
        <h7>
          <ProgressScore2 />
        </h7>
        <p>Pelanggan Puas</p>
      </div>
      <div className="status-item">
        <img src={retention} alt="icon" style={{ width: "50px" }} />
        <h7>
          <ProgressScore3 />
          <span>%</span>
        </h7>
        <p>Tingkat Retensi</p>
      </div>
      <div className="status-item">
        <img src={warehouse} alt="icon" style={{ width: "50px" }} />
        <h7>
          <ProgressScore4 />
        </h7>
        <p>Jumlah Gudang</p>
      </div>
    </section>
  );
}

export default StatsSection;
