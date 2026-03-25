export const works = [
  {
    id: 1,
    date: "2026-03-25",
    companyId: 1,
    equipmentId: 1,

    // 단가
    rate: 50000,

    // 시간
    workHours: 8,
    overtimeHours: 2,
    overtimeRate: 75000,

    // 추가 비용
    extraCost: 20000,

    // 자동 계산 결과
    totalCost: 8 * 50000 + 2 * 75000 + 20000,

    note: "야간 작업",
  },
  {
    id: 2,
    date: "2026-03-24",
    companyId: 2,
    equipmentId: 2,
    rate: 60000,
    workHours: 7,
    overtimeHours: 1,
    overtimeRate: 90000,
    extraCost: 0,
    totalCost: 7 * 60000 + 1 * 90000,
    note: "",
  },
];
