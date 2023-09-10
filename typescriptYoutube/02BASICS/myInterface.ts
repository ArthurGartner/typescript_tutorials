interface cUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface cUser {
  githubToken: string;
}

interface cAdmin extends cUser {
  role: "admin" | "ta" | "learner";
}

const aarthur: cAdmin = {
  dbId: 22,
  role: "admin",
  email: "test@example.com",
  userId: 2211,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "test") => {
    return 10;
  },
  githubToken: "test",
};
