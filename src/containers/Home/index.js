import React, { useState, useEffect } from "react";

import { getCurrentDate } from '../../common/utils';

export default function Home() {
  const [currentDate, setCurrentDate] = useState({});

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <div className="Home">
      <h1>¿Cómo estás de ánimo hoy?</h1>
      <p>{currentDate.full}</p>
    </div>
  );
}
