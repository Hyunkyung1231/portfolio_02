import { Project } from "@/@types/project";

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    name: "매치포인트",
    startDate: "2024.05.24",
    endDate: "2024.06.21",
    description:
      "테니스 클럽과 대회의 관리를 도우며, 참가자들의 성적에 기반한 실시간 랭킹 플랫폼 서비스를 제공",
    skiis: ["React", "Typescript", "Next.js", "Tailwind CSS"],
    tools: "VS Code",
    resource: "프론트엔드 3명, 백엔드 4명",
    role: "프론트엔드",
    part: "대회상세보기 페이지, 내가 참가한 대회 페이지 구현",
    part2:
      "Suspense를 사용하여 데이터 로딩 상태를 관리하고 로딩스피너를 표시하여 사용자 경험을 개선",
    imageUrl: "/매치포인트.png",
    url: "https://www.match-point.co.kr/",
  },
  {
    id: 2,
    name: "북스포일러",
    startDate: "2024.04.24",
    endDate: "2024.05.23",
    description:
      "책 읽을 시간이 없는 현대인을 위한 책 서평 서비스 플랫폼. 총 5일간의 챌린지를 통해 짧은 시간 내에 책을 빠르게 완독할 수 있는 기회를 제공",
    skiis: ["React", "Javascript", "Tailwind CSS"],
    tools: "VS Code",
    resource: "프론트엔드 4명, 백엔드 4명",
    role: "프론트엔드",
    part: "메인, 챌린지 화면 UI 구현",
    part2: " 애플리케이션의 다양한 기능을 재사용 가능한 컴포넌트로 나누어 구현",
    imageUrl: "/북스포일러.png",
    url: "https://oz-02-collabo-004.vercel.app/",
  },
  {
    id: 3,
    name: "Quiz Project",
    startDate: "2024.04.08",
    endDate: "2024.04.15",
    description: "다양한 분야의 상식퀴즈를 통해 가볍게 즐길 수 있는 심리테스트",
    skiis: ["HTML", "CSS", "Javascript"],
    tools: "VS Code",
    resource: "프론트엔드 3명",
    role: "프론트엔드",
    part: "퀴즈 UI구현",
    part2:
      "Suspense를 사용하여 데이터 로딩 상태를 관리하고 로딩스피너를 표시하여 사용자 경험을 개선",
    imageUrl: "/퀴즈프로젝트.png",
    url: "https://quiz-project-pink.vercel.app/",
  },
];
