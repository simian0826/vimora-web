import { ref, onMounted, onUnmounted } from "vue";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBeforeTarget: boolean;
}

export function useCountdown(targetDateStr: string) {
  const countdown = ref<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBeforeTarget: true,
  });

  let timer: NodeJS.Timer;

  const calculateTime = () => {
    // 设置目标时间（拉斯维加斯时区）
    const targetDate = new Date(targetDateStr);

    // 获取当前拉斯维加斯时间
    const currentDate = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
      }),
    );

    const timeDiff = targetDate.getTime() - currentDate.getTime();

    countdown.value = {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      isBeforeTarget: timeDiff > 0,
    };
  };

  onMounted(() => {
    calculateTime();
    timer = setInterval(calculateTime, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer as NodeJS.Timeout);
  });

  return countdown;
}
