import React, { useEffect, useState } from "react";

import { intDataFromFirestore } from "../../common/firebase";

import Board from '../../components/Board';

export default function Detail() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    intDataFromFirestore(setIsLoading);
  }, [isLoading]);

  if (!isLoading) return (null)

  return (
    <div className="Detail">
      <Board />
    </div>
  );
}
