import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Scale,
  Users,
  Monitor,
  Check,
  ArrowRight,
  Mic,
  Shield,
  Lock,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import jangPastorImg from "../../assets/jang-pastor.jpg";
import kimSangjinImg from "../../assets/김상진목사님.jpeg";
import kimSukyungImg from "../../assets/김수경님.jpeg";
import leeSojeongImg from "../../assets/lee-sojeong.jpg";
import appLogoImg from "../../assets/앱로고.png";
import jiyunImg from "../../assets/지윤.png";
import heroBgImg from "../../assets/히어로섹션배경_6월.png";
import female1Img from "../../assets/여성1.png";
import female2Img from "../../assets/여성2.png";
import male2Img from "../../assets/남성2.png";
import male4Img from "../../assets/남성4.png";

// TODO: 다음기수에 맞게 아래 상수를 업데이트하세요.
const SIGNUP_URL = "https://www.latpeed.com/products/tDNWy"; // TODO: 다음기수 신청 링크로 교체
const REFUND_DEADLINE = "4월 25일(토)"; // TODO: 다음기수 환불 마감일
const REFUND_DEADLINE_FAQ = "4월 25일"; // TODO: FAQ용 환불 마감일
const SESSION_1_DATE = "6월 13일 토요일 19시"; // TODO: 1주차 날짜
const SESSION_2_DATE = "6월 20일 토요일 19시"; // TODO: 2주차 날짜
const SESSION_3_DATE = "6월 27일 토요일 19시"; // TODO: 3주차 날짜

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroFadeVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.25, 1, 0.5, 1] as const },
  },
};

const reviews = [
  { gender: "여", age: 27, job: "회계·세무 직장인", review: <>크리스천으로서 <strong className="font-semibold text-[#2D5A4F]">연애와 결혼에 대해 깊게 고민</strong>해본 시간이었습니다. 2주차도 기대됩니다</> },
  { gender: "남", age: 31, job: "교사", review: <>강의 내용이 <strong className="font-semibold text-[#2D5A4F]">생각보다 알차고 깊었습니다.</strong> 기독교적 가치관 안에서 올바른 연애와 결혼관을 들을 수 있어 좋았습니다</> },
  { gender: "여", age: 34, job: "간호사", review: <><strong className="font-semibold text-[#2D5A4F]">같은 고민을 갖고 있는 크리스천 청년들이 많다</strong>는 것에 위로가 되었고 희망과 용기를 얻었습니다</> },
  { gender: "남", age: 36, job: "경찰관", review: <>비슷한 고민을 가진 청년들이 모여 <strong className="font-semibold text-[#2D5A4F]">신앙 안에서 얘기를 나눌 수 있는 시간</strong>이어서 좋았습니다</> },
  { gender: "여", age: 30, job: "교사", review: <>친구에게 어서 <strong className="font-semibold text-[#2D5A4F]">2기를 추천</strong>할 예정이에요!</> },
  { gender: "남", age: 36, job: "서비스직", review: <>걱정도 많았지만 <strong className="font-semibold text-[#2D5A4F]">강의도 너무 좋았고 프로그램이 알차고 유익</strong>했습니다. 다음 회차가 기다려집니다!</> },
  { gender: "여", age: 32, job: "IT 기획·PM", review: <>생각보다 <strong className="font-semibold text-[#2D5A4F]">부담스럽지도, 두렵지도 않았습니다.</strong> 2주차가 너무 기대됩니다!</> },
  { gender: "남", age: 34, job: "안전관리자", review: <>연애와 결혼을 고민하는 <strong className="font-semibold text-[#2D5A4F]">크리스천에게 꼭 필요한 말씀</strong>이었습니다. 여러 사람과의 나눔이 너무나도 감사한 시간이었습니다</> },
  { gender: "여", age: 31, job: "커머스 직장인", review: <><strong className="font-semibold text-[#2D5A4F]">명확한 목표와 신앙을 가진 분들</strong>과 나눔이 은혜가 됐습니다. 다음 모임도 기대됩니다!</> },
  { gender: "남", age: 28, job: "의사", review: <>걱정과 달리, <strong className="font-semibold text-[#2D5A4F]">목소리만으로 나누는 게 오히려 진솔</strong>했어요. 다음 회차가 기대됩니다</> },
  { gender: "여", age: 34, job: "간호사", review: <><strong className="font-semibold text-[#2D5A4F]">건강한 방향으로 가고자 하는 청년들이 많구나,</strong> 같은 고민을 하는 청년들이 많구나 느꼈어요</> },
  { gender: "남", age: 31, job: "공기업 직원", review: <>처음엔 긴장했지만 <strong className="font-semibold text-[#2D5A4F]">분위기가 편안</strong>했고 앞으로의 시간도 기대됩니다</> },
];

export function LandingPageV4() {
  const reviewScrollRef = useRef<HTMLDivElement>(null);
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const totalReviewPages = Math.ceil(reviews.length / 2);

  const scrollToReviewPage = (page: number) => {
    if (!reviewScrollRef.current) return;
    const containerWidth = reviewScrollRef.current.offsetWidth;
    reviewScrollRef.current.scrollTo({ left: page * containerWidth, behavior: "smooth" });
    setCurrentReviewPage(page);
  };

  const handleReviewScroll = () => {
    if (!reviewScrollRef.current) return;
    const page = Math.round(reviewScrollRef.current.scrollLeft / reviewScrollRef.current.offsetWidth);
    setCurrentReviewPage(page);
  };

  return (
    <div className="font-sans text-[#2D2A26] bg-white w-full overflow-x-hidden">

      {/* 1. Hero Section */}
      <header className="relative w-full h-screen flex flex-col items-center justify-start pt-[15vh] md:pt-[18vh] text-center overflow-hidden bg-[#F4F7F5]">
        <div
          className="absolute inset-0 bg-cover bg-[center_15%] md:bg-[center_30%]"
          style={{ backgroundImage: `url(${heroBgImg})` }}
        />
        <div className="absolute inset-0 bg-[#2D4F3A]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />

        <img
          src={appLogoImg}
          alt="초원 앱 로고"
          className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-md rounded-xl"
        />

        {/* 상단 텍스트 영역 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.8, delayChildren: 0.3 },
            },
          }}
          className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center text-white mt-[-4vh]"
        >
          {/* 태그라인 — 가장 작은 글씨 */}
          <motion.p
            variants={heroFadeVariant}
            className="text-xs sm:text-sm tracking-wide text-white/85 mb-5 md:mb-7 drop-shadow-md"
          >
            80만 크리스천의 선택, 초원이 만든 매칭 프로그램
          </motion.p>

          {/* 메인카피 — 가장 크게 */}
          <motion.h1
            variants={heroFadeVariant}
            className="text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-[1.3] tracking-tight [text-shadow:0_4px_16px_rgba(0,0,0,0.6),0_1px_4px_rgba(0,0,0,0.4)]"
          >
            신앙이 맞는 사람과<br />
            진지하게 만나고 싶다면
          </motion.h1>

          {/* 브랜드 + 시즌 */}
          <motion.div
            variants={heroFadeVariant}
            className="flex items-center justify-center gap-2 mt-3 md:mt-4"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#BFF1E6] drop-shadow-md">
              초원 메이트
            </p>
            <span className="text-xs sm:text-sm font-semibold text-[#4A7C6F] bg-[#BFF1E6] px-2.5 py-1 rounded-full drop-shadow-md">
              6월
            </span>
          </motion.div>

        </motion.div>

        {/* 하단 CTA 영역 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="absolute bottom-10 md:bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center w-full px-4"
        >
          <div className="flex flex-col items-center gap-3">
            {/* 프로그램 뱃지 */}
            <div className="flex items-center justify-center flex-wrap gap-2">
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white/85 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full drop-shadow-sm">
                📅 3주 프로그램
              </span>
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white/85 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full drop-shadow-sm">
                🖥 온/오프라인 결합
              </span>
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white/85 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full drop-shadow-sm">
                🎤 강연+소그룹세션
              </span>
            </div>
            <motion.a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-bold text-white bg-[#4A7C6F] hover:bg-[#3D6B5F] rounded-full transition-colors shadow-xl shadow-[#4A7C6F]/30"
            >
              지금 신청하기 →
            </motion.a>
            <p className="text-xs text-white/70 drop-shadow-sm">
              60명 모집, 현재 36명이 신청했어요
            </p>
          </div>
        </motion.div>
      </header>

      {/* 2. Our Reality */}
      <section className="py-20 md:py-32 px-6 bg-[#F4F7F5]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-full flex flex-col items-center"
          >
            <span className="text-[#4A7C6F] font-semibold tracking-widest text-xs md:text-sm mb-3 block uppercase text-center">
              Our Reality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.3] tracking-tight text-center">
              크리스천의 연애와 결혼,
              <br />왜 이토록{" "}
              <span className="relative inline-block z-10">
                막막할까요?
                <svg className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2%] text-[#4A7C6F] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M2,15 Q45,2 98,12" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            {/* 여성 말풍선 */}
            <div className="w-full max-w-2xl mx-auto mb-8">
              <div className="flex flex-col gap-5">
                {[
                  { img: female1Img, age: "26세", job: "XX항공 승무원", text: "주변에 크리스천 남성이 너무 없어요 ㅠㅠ" },
                  { img: female2Img, age: "28세", job: "기독교방송사 아나운서", text: "신앙 없는 남성과는 가치관 충돌이 걱정돼요" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <img src={item.img} alt={item.job} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-xs font-semibold text-[#4A7C6F]">{item.age} · {item.job}</span>
                    </div>
                    <div className="max-w-[85%] px-5 py-3 bg-white rounded-[1.5rem] rounded-tl-[4px] border border-[#E0EBE8] text-[#2D2A26] shadow-sm">
                      <p className="text-[15px] font-medium leading-[1.6]">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 남성 말풍선 */}
            <div className="w-full max-w-2xl mx-auto">
              <div className="flex flex-col gap-5">
                {[
                  { img: male2Img, age: "30세", job: "중견기업 직장인", text: "공동체 밖에서는 크리스천 여성을 만날 기회가 없어요" },
                  { img: male4Img, age: "33세", job: "교사", text: "신앙적 가치관이 잘 맞는 분을 만나고 싶어요" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex flex-col items-end"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#4A7C6F]">{item.age} · {item.job}</span>
                      <img src={item.img} alt={item.job} className="w-8 h-8 rounded-full object-cover" />
                    </div>
                    <div className="max-w-[85%] px-5 py-3 bg-[#4A7C6F] rounded-[1.5rem] rounded-tr-[4px] text-white shadow-sm shadow-[#4A7C6F]/20">
                      <p className="text-[15px] font-medium leading-[1.6]">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-[#4A7C6F] font-semibold text-base md:text-lg mt-14 mb-4"
            >
              초원메이트는 이 고민들로부터 출발했습니다.
            </motion.p>
          </motion.div>

          {/* 대표 인용문 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16"
          >
            <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center md:items-start">
              <div className="relative max-w-[300px] md:max-w-none">
                <div className="absolute inset-0 bg-[#4A7C6F]/10 rounded-[2rem] transform translate-x-4 translate-y-4" />
                <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg group">
                  <ImageWithFallback
                    src={jiyunImg}
                    alt="초원메이트 기획자 이지윤"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8D8D4]/25 via-transparent to-[#9FBFB8]/15 mix-blend-multiply" />
                </div>
              </div>
              <div className="md:hidden mt-6 text-center">
                <p className="text-base font-bold text-[#4A7C6F] tracking-wide">초원메이트 기획자 이지윤</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
              <div className="hidden md:block mb-6">
                <p className="text-lg font-bold text-[#4A7C6F] tracking-wide">초원메이트 기획자 이지윤</p>
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-[1.9] md:leading-[1.95] text-[#2D2A26] font-light">
                "저 역시 결혼적령기 크리스천으로서 이 고민을 깊이 압니다.{" "}
                초원 80만 크리스천의 신앙 데이터와 커뮤니티를 운영하면서, 크리스천 청년들의 가장 큰 고민이 연애와 결혼이라는 것을 수없이 목격했습니다."
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-[1.9] md:leading-[1.95] text-[#2D2A26] font-light mt-4">
                "<strong className="font-semibold text-[#4A7C6F]">초원메이트는 한 번의 휘발성 이벤트가 아니라, 신앙 안에서 좋은 만남이 이루어지는 과정을 제공하는 프로그램입니다.</strong>"
              </p>
            </div>
          </motion.div>

          {/* 정보 안내 박스 */}
        </div>
      </section>

      {/* 1.5. Season 1 Review */}
      <section className="py-16 md:py-24 px-6 bg-[#4A7C6F]">
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#BFF1E6] font-semibold tracking-widest text-xs md:text-sm mb-3 block uppercase">
              Season 1 Review
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold tracking-tight text-white leading-[1.4]">
              시즌 1 참가자 69명이 직접 남긴 후기예요
            </h2>
          </motion.div>

          {/* Carousel wrapper */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scrollToReviewPage(Math.max(0, currentReviewPage - 1))}
              disabled={currentReviewPage === 0}
              className="absolute left-[-20px] md:left-[-44px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="이전"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Scroll container */}
            <div
              ref={reviewScrollRef}
              onScroll={handleReviewScroll}
              className="overflow-x-auto snap-x snap-mandatory flex [&::-webkit-scrollbar]:hidden gap-4"
              style={{ scrollbarWidth: "none" }}
            >
              {Array.from({ length: totalReviewPages }).map((_, pageIdx) => (
                <div key={pageIdx} className="min-w-full snap-start flex gap-4">
                  {reviews.slice(pageIdx * 2, pageIdx * 2 + 2).map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#F4F7F5] rounded-2xl p-6 md:p-7 flex flex-col gap-3 flex-1"
                    >
                      <span className="text-[#4A7C6F] text-2xl font-serif leading-none">"</span>
                      <p className="text-[#2D2A26] text-sm md:text-base leading-relaxed font-light flex-1">
                        {item.review}
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-[#C8D8D4]">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          item.gender === "여"
                            ? "bg-[#4A7C6F]/15 text-[#2D5A4F]"
                            : "bg-[#4A7C6F]/8 text-[#4A7C6F]"
                        }`}>
                          {item.gender}
                        </span>
                        <span className="text-[#6B6661] text-xs md:text-sm">
                          {item.age}세 · {item.job}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scrollToReviewPage(Math.min(totalReviewPages - 1, currentReviewPage + 1))}
              disabled={currentReviewPage === totalReviewPages - 1}
              className="absolute right-[-20px] md:right-[-44px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="다음"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalReviewPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToReviewPage(i)}
                className={`rounded-full transition-all ${
                  i === currentReviewPage
                    ? "w-5 h-2 bg-white"
                    : "w-2 h-2 bg-white/40"
                }`}
                aria-label={`${i + 1}페이지`}
              />
            ))}
          </div>


        </div>
      </section>

      {/* 3. Why 초원 메이트 */}
      <section className="py-16 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#4A7C6F] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-3 block uppercase">
              Why 초원 메이트
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
              초원 메이트가 다른 이유
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
          >
            {[
              {
                icon: <Shield className="w-7 h-7" />,
                title: "철저한 프로필 검토와 매칭",
                desc: "80만 명이 사용하는 초원성경앱의 신앙 데이터 기반으로 크리스천임을 검증하고, 프로필 검토를 통해 참가자 매칭을 위한 밸런스를 조율합니다.",
                points: ["신앙 데이터 기반 검증", "이단 필터링", "매칭을 위한 철저한 프로필 검토"],
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "교회 공동체와 완전히 분리된 만남",
                desc: "같은 교회 교인끼리 마주치지 않도록 매칭됩니다. 공동체 관계에 영향 없이 만남 자체에만 집중할 수 있습니다.",
                points: ["공동체와 완전 분리", "소문 걱정 없음", "실패해도 일상에 영향 없음"],
              },
              {
                icon: <Lock className="w-7 h-7" />,
                title: "철저히 보호되는 개인정보",
                desc: "소개팅 앱처럼 사전에 정보를 공개하지 않습니다. 연락처는 양쪽이 모두 선택했을 때만 공유되며, 프로그램 진행 외에는 어떤 정보도 공개되지 않습니다.",
                points: ["선택적 정보 공개", "철저한 보안", "신뢰할 수 있는 플랫폼"],
              },
              {
                icon: <MessageCircle className="w-7 h-7" />,
                title: "신앙 가치관을 자연스럽게 나누는 구조",
                desc: "발제문이 제공되어 스몰토크 걱정 없이 대화를 시작할 수 있습니다. 신앙, 가치관, 인생관을 깊이 있게 나누며 진정성 있는 만남이 시작됩니다.",
                points: ["발제문 기반 토론", "깊이 있는 대화", "신앙 가치관 자연스럽게 확인"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="bg-[#F4F7F5] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-[#4A7C6F] shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 tracking-tight">{item.title}</h3>
                <p className="text-[#6B6661] leading-relaxed font-light text-sm md:text-base mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#4A7C6F] font-medium">
                      <Check className="w-4 h-4 stroke-[3] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Program Details */}
      <section className="py-16 md:py-28 px-6 bg-[#F4F7F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#4A7C6F] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-3 block uppercase">
              Program Details
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
              프로그램 소개
            </h2>
            <p className="text-[#6B6661] max-w-2xl mx-auto leading-relaxed font-light text-base md:text-lg">
              3주간 진솔한 교제로 서로를 알아갈 수 있도록
              <br />초원은 이렇게 준비했습니다.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col md:flex-row gap-5 md:gap-8 pt-6 pb-12"
          >
            {[
              {
                icon: <Monitor className="w-7 h-7" />,
                title: "온/오프라인 결합 프로그램",
                desc: <>1-2회차는 ZOOM으로, 3회차 오프라인 모임으로<br />점진적으로 가까워지는 교제의 장을 만듭니다.</>,
              },
              {
                icon: <Scale className="w-7 h-7" />,
                title: "성비 균형",
                desc: <>1987-1999년생 남녀 각 30명,<br />총 60명의 밸런스를 맞추어 진행합니다.</>,
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "로테이션 소그룹",
                desc: <>매 회차 소그룹을 변경하여 기간 내<br />모든 이성과 교제할 시간이 주어집니다.</>,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_2px_20px_rgb(0,0,0,0.03)] text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] w-full md:flex-1 cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F4F7F5] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-[#4A7C6F] flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 tracking-tight">{item.title}</h3>
                <p className="text-[#6B6661] leading-relaxed font-light text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Curriculum */}
      <section className="py-16 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#4A7C6F] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-3 block uppercase">Curriculum</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">3주간의 여정</h2>
            <p className="text-[#6B6661] font-light text-base md:text-lg">
              매주 새로운 게스트와 함께
              <br />다양한 주제에 대해 교제를 나눕니다.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col items-center gap-4 md:gap-6 pb-8 md:pb-12"
          >
            {[
              {
                week: "1주차", mode: "온라인", speaker: "김상진 목사님",
                title: "좋은 배우자를 원하십니까, 좋은 배우자가 되고 싶으십니까?",
                desc: "배우자 만남 전에 선행되어야 할 개인의 성숙",
                img: kimSangjinImg, date: SESSION_1_DATE,
                bio: ["21만 유튜브 채널 달빛마을 운영", "CCM 사역팀 달빛마을 운영"],
              },
              {
                week: "2주차", mode: "온라인", speaker: "김수경님",
                title: "두 사람이 함께 만들어가는 신앙 공동체",
                desc: "결혼 준비과정 자체가 간증인 크리스천 부부의 이야기",
                img: kimSukyungImg, date: SESSION_2_DATE,
                bio: ["크리스천 부부 인스타그램 계정 @give_yourwedding 운영"],
              },
              {
                week: "3주차", mode: "오프라인", speaker: "지윤 (호스트)",
                title: "한 걸음 더 가까이",
                desc: "온라인에서 쌓은 교제를 바탕으로 오프라인에서 더 깊이 알아갑니다.",
                img: "https://images.unsplash.com/photo-1640037984424-ac1a02cb742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNvZmZlZSUyMHNob3AlMjB0b3AlMjB2aWV3JTIwaGFuZHMlMjB0YWJsZXxlbnwxfHx8fDE3NzU4MjU4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                date: SESSION_3_DATE,
                bio: ["모임 장소는 서울 용산, 강남, 성수 중 선정하여 별도 공지 예정입니다."],
              },
            ].map((session, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="relative overflow-hidden w-full max-w-[800px] bg-[#F4F7F5] rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
              >
                {session.img && index === 1 && (
                  <div className="absolute inset-0 z-0 opacity-30">
                    <img
                      src={session.img as string}
                      alt={session.speaker}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 45%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7F5]/80 via-[#F4F7F5]/50 to-[#F4F7F5]/30" />
                  </div>
                )}
                {session.img && index !== 1 && (
                  <div className={`absolute inset-0 z-0 ${index === 2 ? "opacity-25" : "opacity-40"}`}>
                    <ImageWithFallback
                      src={session.img}
                      alt={session.speaker}
                      className={`w-full h-full object-cover ${index === 2 ? "object-center" : "object-[center_20%]"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7F5]/90 to-[#F4F7F5]/70 mix-blend-multiply" />
                    <div className={`absolute inset-0 ${index === 2 ? "bg-[#F4F7F5]/75" : "bg-[#F4F7F5]/50"}`} />
                  </div>
                )}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[260px] md:min-h-[280px] p-6 md:p-8 lg:p-10">
                  <div className="flex items-center justify-between w-full mb-8 md:mb-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-white text-[#4A7C6F] rounded-full flex items-center justify-center text-lg md:text-xl font-bold tracking-tighter shadow-sm">
                      {session.week}
                    </div>
                    <div className="bg-white/60 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm border border-white/40">
                      <h4 className="text-[#2D5A4F] font-bold text-sm md:text-base tracking-tight flex items-center gap-2">
                        {index === 2 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        )}
                        {index === 2 ? "네트워킹" : session.speaker}
                      </h4>
                    </div>
                  </div>
                  <div className="text-left mt-auto w-full md:w-[85%]">
                    <h3 className="text-xl md:text-2xl lg:text-[26px] font-bold text-gray-900 mb-3 md:mb-4 tracking-tight leading-tight">{session.title}</h3>
                    <p className="text-[#6B6661] font-light leading-relaxed text-sm md:text-base">{session.desc}</p>
                    <div className="mt-4 pt-4 border-t border-[#4A7C6F]/20 flex items-center gap-1.5 md:gap-2 text-[#2D5A4F] font-medium text-xs md:text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>{session.date}</span>
                      <span className="ml-2 px-2 py-0.5 bg-[#4A7C6F]/10 text-[#4A7C6F] rounded-full text-xs font-semibold uppercase tracking-wide">{session.mode}</span>
                    </div>
                    {session.bio.length > 0 && (
                      <ul className="mt-4 pt-3 border-t border-[#4A7C6F]/30 space-y-1.5">
                        {session.bio.map((line, i) => (
                          <li key={i} className="text-[#6B6661] text-xs md:text-sm font-medium leading-relaxed flex items-start gap-2">
                            <span className="text-[#4A7C6F] mt-0.5 flex-shrink-0">·</span>
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Program Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            className="w-full mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#C8D8D4]"
          >
            <h3 className="text-center text-[#4A7C6F] font-semibold tracking-widest text-xs md:text-sm mb-4 md:mb-6 block uppercase">
              온라인 프로그램 진행 순서
            </h3>
            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: <Mic className="w-8 h-8" />, title: "강연", time: "30분", desc: "게스트의 강연으로\n마음의 기초를 다집니다." },
                { icon: <Users className="w-8 h-8" />, title: "소그룹 교제", time: "60분", desc: "발제문을 가지고\n소그룹끼리 진솔한 대화를 통해\n서로를 깊이 이해합니다." },
                { icon: <Check className="w-8 h-8" />, title: "마무리", time: "10분", desc: "본 회차에 대한 후기 설문을\n배포하고 마무리합니다." },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <motion.div variants={fadeInVariant} className="w-full bg-[#F4F7F5] rounded-2xl p-6 lg:p-8 text-center min-h-[320px] lg:min-h-[340px] flex flex-col items-center justify-center border border-[#E0EBE8]">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-5 text-[#4A7C6F] flex-shrink-0">{step.icon}</div>
                    <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-[#4A7C6F] font-medium text-base lg:text-lg mb-3 lg:mb-4">{step.time}</p>
                    <p className="text-[#6B6661] text-sm lg:text-base font-light leading-relaxed whitespace-pre-line">{step.desc}</p>
                  </motion.div>
                  {index < 2 && (
                    <div className="absolute -right-7 lg:-right-8 top-1/2 transform -translate-y-1/2">
                      <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#4A7C6F]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex md:hidden flex-col items-stretch gap-4">
              {[
                { icon: <Mic className="w-7 h-7" />, title: "강연", time: "30분", desc: "게스트의 강연으로\n마음의 기초를 다집니다." },
                { icon: <Users className="w-7 h-7" />, title: "소그룹 교제", time: "60분", desc: "발제문을 가지고\n소그룹끼리 진솔한 대화를 통해\n서로를 깊이 이해합니다." },
                { icon: <Check className="w-7 h-7" />, title: "마무리", time: "10분", desc: "본 회차에 대한 후기 설문을\n배포하고 마무리합니다." },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-stretch">
                  <motion.div variants={fadeInVariant} className="bg-[#F4F7F5] rounded-xl p-5 text-center border border-[#E0EBE8]">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-[#4A7C6F] flex-shrink-0">{step.icon}</div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1.5">{step.title}</h4>
                    <p className="text-[#4A7C6F] font-medium text-sm mb-2">{step.time}</p>
                    <p className="text-[#6B6661] text-xs font-light leading-relaxed whitespace-pre-line">{step.desc}</p>
                  </motion.div>
                  {index < 2 && (
                    <div className="flex justify-center py-3">
                      <svg className="w-5 h-5 text-[#4A7C6F]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm md:text-base text-[#2D5A4F] font-medium">
              *오프라인 프로그램 구성은 2회차 마무리 후 별도 공지 예정입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Special Event */}
      <section className="py-16 md:py-28 px-6 bg-[#F4F7F5] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#4A7C6F]/10 rounded-[1.5rem] md:rounded-[2rem] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640092134597-e715cacbc40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlYXRpbmclMjBicnVuY2glMjBoYW5kcyUyMG9ubHklMjB3YXJtJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3NTc3NjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="자연광이 드는 로맨틱하고 따뜻한 분위기의 식사 모습"
                className="relative z-10 w-full h-auto aspect-[4/3] object-cover rounded-[1.5rem] md:rounded-[2rem] shadow-md"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="w-full md:w-1/2 mt-4 md:mt-0"
          >
            <span className="text-[#4A7C6F] font-semibold tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 block uppercase text-center md:text-left">SPECIAL EVENT</span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.3] tracking-tight text-center md:text-left">
              최종 매칭 성공시<br />식사비용 10만원 지원
            </h2>
            <p className="text-[#6B6661] text-base md:text-lg leading-[1.7] md:leading-[1.8] mb-4 md:mb-6 font-light text-center md:text-left">
              마지막 회차 종료후 설문을 통해
              <br />더 알아가고 싶은 분을 선택하게됩니다.
              <br />최종 매칭에 성공하신 경우,
              <br />연락처 및 식사 비용 10만원을 지급해드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. Target & Guidelines */}
      <section className="py-16 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="bg-[#F4F7F5] p-8 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[2.5rem]"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 tracking-tight text-center md:text-left">참가 대상</h2>
            <p className="text-base md:text-lg leading-[1.7] md:leading-[1.8] text-[#6B6661] font-light text-center md:text-left">
              신앙 안에서 진지한 관계를 고민하며
              <br />아름다운 만남을 이루고자 하는
              <strong className="text-[#4A7C6F] font-bold text-lg md:text-xl block mt-3 md:mt-4">
                87~99년생 미혼인 초원성경앱 유저
              </strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 tracking-tight text-center md:text-left">참가 안내</h2>
            <ul className="space-y-4 md:space-y-6 text-[#6B6661] font-light text-sm md:text-base">
              {[
                { label: "참가비", desc: "15만원" },
                { label: "결제방식", desc: "카드결제 (무이자 할부 결제 지원)" },
                { label: "No-Show 패널티", desc: "무단 불참 시 다음 회차 참가 자격 박탈" },
                { label: "사전 질문 & 후기", desc: "회차별 진행 예정." },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-[#F4F7F5] text-[#4A7C6F] rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-3 md:mr-4 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 md:w-[14px] md:h-[14px] stroke-[3]" />
                  </div>
                  <div className="leading-relaxed">
                    <strong className="font-semibold text-gray-900 mr-2">{item.label}:</strong>
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 환불 안내 */}
        <div className="max-w-4xl mx-auto mt-10 md:mt-14 px-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="bg-[#FFF8F0] border border-[#F0C080]/40 rounded-2xl p-6 md:p-8"
          >
            <p className="text-sm md:text-base font-bold text-[#B45309] mb-4">(중요) 환불 안내</p>
            <div className="space-y-4 text-sm md:text-base text-[#6B6661] font-light leading-relaxed">
              <p>
                1기 티켓의 빠른 매진, 그리고 마감직전 단순변심으로 인한 환불로 다른 참가자분들의 여러차례 사이트에서 티켓 재고를 확인해야하는 어려움이 있었습니다.
              </p>
              <p>
                보다 원활한 티켓 판매를 위해 부득이하게 환불기간을 결제일 기준 3일이내로 조정하여 운영되며, 해당기간 이후 환불은 불가하니 참여 여부에 대해 심사숙고후 결제해주시면 너무 감사드리겠습니다 :-)
              </p>
              <p>
                보다 풍성한 프로그램을 위해 초원지기들도 최선을 다하겠습니다.
              </p>
              <p className="text-xs md:text-sm text-[#9CA3AF] pt-2 border-t border-[#F0C080]/40">
                *원활한 프로그램 진행을 위해 5월 31일 23:59이후는 구매 3일내 이시더라도 환불이 불가하니 5월말 구매하시는 분들은 참고 부탁드립니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 md:py-28 px-6 bg-[#F4F7F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#4A7C6F] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-3 block uppercase">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">자주 묻는 질문</h2>
          </motion.div>

          {[
            {
              category: "참가 관련",
              items: [
                { q: "초원성경 앱을 꼭 사용해야 하나요?", a: "네 맞습니다. 카카오톡으로 3초 로그인 가능하니 가입 후 신청해주세요!" },
                { q: "비신자도 참가할 수 있나요?", a: "본 행사는 크리스천 청년 대상으로, 등록교회가 있으신 경우 초원 가입 후 신청 가능합니다." },
                { q: "정원이 다 차면 어떻게 되나요?", a: "6월 1일 00시 이후 잔여좌석 발생 시 추가 모집 예정입니다." },
              ],
            },
            {
              category: "일정/진행 관련",
              items: [
                { q: "3번 모임에 모두 참석해야 하나요?", a: "본 프로그램은 신앙 안에서 연애와 결혼, 사랑에 대해 공부하고, 교류하는 커리큘럼으로, 1,2회차 모두 참석하신분들에 대해서만 3회차 오프라인 모임 참석 권한이 주어집니다." },
                { q: "ZOOM 링크는 언제 공유되나요?", a: "참가 확정자분들께 별도 문자 안내 예정입니다." },
                { q: "오프라인 장소는 어디인가요?", a: "2회차 종료 후 참석 대상자분들께 별도 공지 예정입니다." },
              ],
            },
            {
              category: "비용 관련",
              items: [
                { q: "참가비 15만원은 언제 결제하나요?", a: "신청 단계에서 카드 결제로 진행해주시면 됩니다." },
                { q: "카드 할부는 몇 개월까지 가능한가요?", a: "무이자 12개월 가능합니다." },
                { q: "매칭 실패 시 환불이 되나요?", a: "본 프로그램은 강연 + 네트워킹이 결합된 행사로, 매칭 실패 시 별도 환불은 어렵습니다." },
              ],
            },
            {
              category: "매칭 관련",
              items: [
                { q: "매칭은 어떤 기준으로 이루어지나요?", a: "참가자분들은 연령별 균등하게 밸런스를 맞춰드릴 예정이며, 온라인 소그룹은 랜덤 배정입니다." },
                { q: "식사비 10만원은 어떻게 지급되나요?", a: "매칭되신 두 분께 연락처 공유 후, 만남 인증샷을 보내주시면 10만원을 지급해드립니다." },
              ],
            },
            {
              category: "개인정보 관련",
              items: [
                { q: "내 연락처가 상대방에게 바로 공개되나요?", a: "아닙니다. 3회차 후 후기 설문을 통해 더 알아가고 싶은 상대를 지목해주시면, 두 분이 서로 상대를 선택한 경우에만 양측의 연락처를 공유해드립니다." },
                { q: "신청 정보는 어디에 사용되나요?", a: "철저한 보안 아래 프로그램 참석자 밸런스 조정 및 프로그램 제작에만 참고되며, 참가자분들께 별도로 공유되지 않습니다." },
              ],
            },
          ].map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] as const, delay: gi * 0.05 }}
              className="mb-10"
            >
              <h3 className="text-xs md:text-sm font-bold text-[#4A7C6F] tracking-widest uppercase mb-4">{group.category}</h3>
              <div className="flex flex-col gap-3">
                {group.items.map((item, ii) => (
                  <div key={ii} className="bg-white rounded-2xl px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#E0EBE8]">
                    <p className="font-semibold text-gray-900 text-sm md:text-base mb-2 leading-snug">Q. {item.q}</p>
                    <p className="text-[#6B6661] font-light text-sm md:text-base leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <p className="text-center text-sm md:text-base text-[#6B6661] font-light mt-4">
            이 외 문의사항은{" "}
            <a href="https://chowon.channel.io" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4A7C6F] underline underline-offset-2">
              초원 고객센터
            </a>
            로 문의바랍니다.
          </p>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 md:py-36 px-6 text-center relative overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh] bg-[#F4F7F5]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInVariant}
          className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8 md:gap-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-gray-900 leading-[1.3] tracking-tight text-center">
            신앙안에서 만날 새로운 인연,
            <br />초원이 함께합니다.
          </h2>

          <motion.a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-bold text-white bg-[#4A7C6F] hover:bg-[#3D6B5F] rounded-full overflow-hidden transition-colors shadow-xl shadow-[#4A7C6F]/30 w-full sm:w-auto"
          >
            <span className="relative flex items-center gap-2 md:gap-3 tracking-wide">
              지금 바로 신청하기
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-[#999] text-sm bg-white border-t border-[#E0EBE8]">
        <p className="font-light tracking-wide">© Chowon all rights reserved.</p>
      </footer>
    </div>
  );
}
