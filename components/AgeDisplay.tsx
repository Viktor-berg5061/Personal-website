'use client';

import { useMemo } from 'react';

export default function AgeDisplay({ birthDate }: { birthDate: string }) {
  const age = useMemo(() => {
    const birthDateObj = new Date(birthDate);
    const now = new Date();
    let calculatedAge = now.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = now.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDateObj.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  }, [birthDate]);

  return (
    <span className="font-mono text-red-500">
      {age}
    </span>
  );
}
