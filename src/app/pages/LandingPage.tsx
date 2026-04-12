import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Scale,
  Users,
  Monitor,
  Check,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import jangPastorImg from "../../assets/jang-pastor.jpg";
import leeSojeongImg from "../../assets/lee-sojeong.jpg";
import appLogoImg from "../../assets/앱로고.png";

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

export function LandingPage() {
  return (
    <div className="font-sans text-[#2D2A26] bg-white w-full overflow-x-hidden">
      {/* 1. Main Hero Section */}
      <header className="relative w-full h-screen flex flex-col items-center justify-start pt-[15vh] md:pt-[18vh] text-center overflow-hidden bg-[#FAF7F5]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#2D2A26]/50" />

        {/* 앱 로고 - 상단 중앙 고정 */}
        <img
          src={appLogoImg}
          alt="초원 앱 로고"
          className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 w-9 h-9 md:w-11 md:h-11 object-contain drop-shadow-md rounded-xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.8,
                delayChildren: 0.3,
              },
            },
          }}
          className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center text-white"
        >
          <motion.div
            variants={heroFadeVariant}
            className="flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 md:mb-6 opacity-90 border-b border-white/40 pb-2 font-medium">
              CHOWON PILOT PROGRAM
            </span>
            <p className="text-base sm:text-lg md:text-2xl font-light opacity-95 leading-relaxed drop-shadow mb-3 md:mb-5">
              신앙 안에서 인연을 찾아가는 특별한 여정
            </p>
          </motion.div>

          <motion.h1
            variants={heroFadeVariant}
            className="font-nanumbrush font-normal tracking-normal leading-[1.2] drop-shadow-lg mt-2 md:mt-4 text-[#D68C82] text-[64px]"
          >
            만나, 봄
          </motion.h1>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="absolute bottom-10 md:bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center w-full px-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm md:text-base font-light text-white/95 whitespace-pre-line text-center leading-[1.6] drop-shadow-md">
              기도로 기다려온 만남,{"\n"}그 첫걸음을 시작해
              볼까요?
            </p>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ArrowDown className="w-4 h-4 text-white/95 stroke-[2]" />
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* 2. Problem Statement (Our Reality) */}
      <section className="py-20 md:py-32 px-6 bg-[#FAF7F5]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="w-full flex flex-col items-center"
          >
            <span className="text-[#D68C82] font-semibold tracking-widest text-xs md:text-sm mb-3 block uppercase text-center">
              Our Reality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.3] tracking-tight text-center">
              크리스천의 연애와 결혼,
              <br />왜 이토록{" "}
              <span className="relative inline-block z-10">
                막막할까요?
                <svg
                  className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2%] text-[#D68C82] -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,15 Q45,2 98,12"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-[#6B6661] text-base md:text-lg leading-[1.8] font-light text-center mb-10 md:mb-12">
              나와 같은 곳을 바라보며 기도로 함께 걸어갈 동역자.
              <br />
              누구나 꿈꾸는 아름다운 만남이지만
              <br />
              현실의 벽 앞에서 우리는 주저하게 됩니다.
            </p>

            <div className="w-full flex flex-col gap-5 md:gap-7 mt-2 max-w-2xl mx-auto">
              {[
                {
                  text: "주위에 크리스천이 많지 않아요ㅠㅠ",
                  align: "left",
                },
                {
                  text: "공동체 안에서 만나고 싶지는 않은데,\n크리스천을 만날 기회가 없어요",
                  align: "right",
                },
                {
                  text: "혹시 이단을 만날까 두려워요",
                  align: "left",
                },
                {
                  text: "제 개인정보가 노출되진 않을까 부담돼요",
                  align: "right",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: item.align === "left" ? -20 : 20,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className={`flex ${item.align === "left" ? "justify-start" : "justify-end"} w-full`}
                >
                  <div
                    className={`relative max-w-[85%] md:max-w-[80%] px-5 py-4 md:px-7 md:py-5 shadow-sm md:shadow-md ${
                      item.align === "left"
                        ? "bg-white rounded-[1.5rem] rounded-tl-[4px] border border-[#F2EBE9] text-[#2D2A26]"
                        : "bg-[#D68C82] rounded-[1.5rem] rounded-tr-[4px] text-white shadow-[#D68C82]/20"
                    }`}
                  >
                    <p className="text-[15px] sm:text-base md:text-[17px] font-medium leading-[1.6] whitespace-pre-line tracking-tight">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.2,
            }}
            className="w-full relative mt-4 md:mt-8 flex items-center justify-center min-h-[400px] md:min-h-[500px]"
          >
            <div className="absolute inset-0 bg-[#D68C82]/10 rounded-[2rem] transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" />
            <div className="relative z-10 w-full h-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-video rounded-[2rem] overflow-hidden shadow-lg group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1763527704731-08d89c8c6e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNvdXBsZSUyMGZhY2VsZXNzJTIwb3V0ZG9vcnMlMjB3YXJtfGVufDF8fHx8MTc3NTgyMjM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#2D2A26]/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-10 text-center bg-[#3a393954]">
                <p className="text-sm sm:text-base md:text-lg leading-[1.8] text-white/95 font-light drop-shadow-md">
                  <strong className="font-semibold text-[#FFD6D1]">
                    신앙 안에서 사랑을 소망하는
                  </strong>{" "}
                  크리스천 청년들을 위해
                  <br />
                  초원이 새로운 만남의 장을 엽니다.
                  <br />
                  <br />
                  3주간 사랑의 의미를 신앙적으로 탐구, 교류하며
                  <br />
                  <strong className="font-semibold text-[#FFD6D1]">
                    소중한 인연을 발견하는 여정을 함께합니다.
                  </strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Program Details */}
      <section className="py-16 md:py-28 px-6 bg-[#FAF7F5]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#D68C82] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-3 block uppercase">
              Program Details
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
              프로그램 소개
            </h2>
            <p className="text-[#6B6661] max-w-2xl mx-auto leading-relaxed font-light text-base md:text-lg">
              3주간 진솔한 교제로 서로를 알아갈 수 있도록
              <br />
              초원은 이렇게 준비했습니다.
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
                title: "온라인 모임",
                desc: (
                  <>
                    전 회차 ZOOM 온라인 진행으로 장소 제한없이,
                    <br />
                    대면의 부담없이 교제합니다.
                  </>
                ),
              },
              {
                icon: <Scale className="w-7 h-7" />,
                title: "성비 균형",
                desc: (
                  <>
                    1987-1999년생 남녀 각 30명,
                    <br />총 60명의 밸런스를 맞추어 진행합니다.
                  </>
                ),
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "로테이션 소그룹",
                desc: (
                  <>
                    매 회차 소그룹을 변경하여 기간 내<br />
                    모든 이성과 교제할 시간이 주어집니다.
                  </>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_2px_20px_rgb(0,0,0,0.03)] text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] w-full md:flex-1 cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FAF7F5] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-[#D68C82] flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#6B6661] leading-relaxed font-light text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Curriculum */}
      <section className="py-16 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="text-center mb-12 md:mb-20"
          >
            <span className="text-[#D68C82] font-semibold tracking-widest text-xs md:text-sm mb-2 md:mb-3 block uppercase">
              Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-5">
              3주간의 여정
            </h2>
            <p className="text-[#6B6661] font-light text-base md:text-lg">
              매주 새로운 게스트와 함께
              <br />
              다양한 주제에 대해 교제를 나눕니다.
            </p>
            <p className="text-[#D68C82] font-semibold tracking-widest text-xs md:text-sm mt-3 uppercase">
              * 박스를 누르면 게스트 상세 정보를 확인할 수 있어요!
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
                week: "1주차",
                speaker: "장재기 목사님",
                title: "하나님이 디자인하신 사랑과 관계",
                desc: "성경적 사랑과 관계의 본질을 탐구하고, 나에게 맞는 인연을 분별하는 영적 지혜를 배웁니다.",
                img: jangPastorImg,
                date: "5월 2일 토요일 19시",
                bio: ["<따라하는 기도> 저자", "팔로잉 미니스트리 대표", "초원 기도하기 개발 참여"],
              },
              {
                week: "2주차",
                speaker: "나는바보양님",
                title: "크리스천의 연애와 결혼",
                desc: "신앙 안에서의 건강한 연애와 결혼을 이야기합니다.",
                img: leeSojeongImg,
                date: "5월 8일 금요일 19시",
                bio: ["<하나님, 저희 잘 가고 있는 거 맞나요?> 저자", "크리스천 부부 인스타그램 계정 '나는 바보양' 운영"],
              },
              {
                week: "3주차",
                speaker: "지윤 (호스트)",
                title: "사랑에 한 걸음 가까이",
                desc: "앞선 회차에서 다룬 내용을 바탕으로 사랑에 대한 이해를 나누고 교제합니다.",
                img: "https://images.unsplash.com/photo-1640037984424-ac1a02cb742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNvZmZlZSUyMHNob3AlMjB0b3AlMjB2aWV3JTIwaGFuZHMlMjB0YWJsZXxlbnwxfHx8fDE3NzU4MjU4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                date: "5월 16일 토요일 19시",
                bio: [] as string[],
              },
            ].map((session, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeInVariant}
                  tabIndex={0}
                  className="group relative overflow-hidden w-full max-w-[800px] bg-[#FAF7F5] rounded-2xl md:rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  {/* Background Image */}
                  {session.img && (
                    <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-500 ease-out">
                      <ImageWithFallback
                        src={session.img}
                        alt={session.speaker}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${index === 2 ? "object-center" : "object-[center_20%]"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7F5]/90 to-[#FAF7F5]/70 group-hover:from-[#8A5A53]/85 group-hover:to-[#D68C82]/75 transition-colors duration-500 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-[#FAF7F5]/50 group-hover:bg-[#8A5A53]/40 transition-colors duration-500" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[260px] md:min-h-[280px] p-6 md:p-8 lg:p-10">
                    <div className="flex items-center justify-between w-full mb-8 md:mb-10">
                      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-white group-hover:bg-white/20 group-focus:bg-white/20 group-active:bg-white/20 text-[#D68C82] group-hover:text-white group-focus:text-white group-active:text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold tracking-tighter transition-colors duration-300 shadow-sm group-hover:shadow-none">
                        {session.week}
                      </div>

                      <div className="bg-white/60 group-hover:bg-white/10 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 shadow-sm group-hover:shadow-none border border-white/40 group-hover:border-white/20">
                        <h4 className="text-[#8A5A53] group-hover:text-white font-bold text-sm md:text-base tracking-tight transition-colors duration-300 flex items-center gap-2">
                          {index === 2 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-80"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-80"
                            >
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          )}
                          {index === 2 ? "네트워킹" : session.speaker}
                        </h4>
                      </div>
                    </div>

                    <div className="text-left mt-auto w-full md:w-[85%]">
                      <h3 className="text-xl md:text-2xl lg:text-[26px] font-bold text-gray-900 group-hover:text-white group-focus:text-white group-active:text-white mb-3 md:mb-4 tracking-tight transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-md leading-tight">
                        {session.title}
                      </h3>
                      <p className="text-[#6B6661] group-hover:text-white/95 group-focus:text-white/95 group-active:text-white/95 font-light leading-relaxed text-sm md:text-base transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-md">
                        {session.desc}
                      </p>

                      <div className="mt-4 pt-4 border-t border-[#D68C82]/20 group-hover:border-white/30 transition-colors duration-300 flex items-center gap-1.5 md:gap-2 text-[#8A5A53] group-hover:text-white font-medium text-xs md:text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-4 md:h-4"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>{session.date}</span>
                      </div>

                      {/* Bio — 클릭/포커스 시 표시 */}
                      {session.bio.length > 0 && (
                        <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-focus:max-h-40 group-active:max-h-40 transition-all duration-500 ease-out">
                          <ul className="mt-4 pt-3 border-t border-white/20 space-y-1.5">
                            {session.bio.map((line, i) => (
                              <li key={i} className="text-white/90 text-xs md:text-sm font-light leading-relaxed flex items-start gap-2">
                                <span className="text-white/60 mt-0.5 flex-shrink-0">·</span>
                                {line}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Connection System */}
      <section className="py-16 md:py-28 px-6 bg-[#FAF7F5] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D68C82]/10 rounded-[1.5rem] md:rounded-[2rem] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640092134597-e715cacbc40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlYXRpbmclMjBicnVuY2glMjBoYW5kcyUyMG9ubHklMjB3YXJtJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3NTc3NjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="자연광이 드는 로맨틱하고 따뜻한 분위기의 식사 모습"
                className="relative z-10 w-full h-auto aspect-[4/3] object-cover rounded-[1.5rem] md:rounded-[2rem] shadow-md"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1,
            }}
            className="w-full md:w-1/2 mt-4 md:mt-0"
          >
            <span className="text-[#D68C82] font-semibold tracking-[0.2em] text-xs md:text-sm mb-3 md:mb-4 block uppercase text-center md:text-left">
              SPECIAL EVENT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-6 md:mb-8 leading-[1.3] tracking-tight text-center md:text-left">
              최종 매칭 성공시
              <br />
              식사비용 10만원 지원
            </h2>
            <p className="text-[#6B6661] text-base md:text-lg leading-[1.7] md:leading-[1.8] mb-4 md:mb-6 font-light text-center">
              마지막 회차 종료후 설문을 통해
              <br />더 알아가고 싶은 분을 선택하게됩니다.
              <br />
              최종 매칭에 성공하신 경우,
              <br />
              연락처 및 식사 비용 10만원을 지급해드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. Target & Guidelines */}
      <section className="py-16 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInVariant}
            className="bg-[#FAF7F5] p-8 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[2.5rem]"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 tracking-tight text-center md:text-left">
              참가 대상
            </h2>
            <p className="text-base md:text-lg leading-[1.7] md:leading-[1.8] text-[#6B6661] font-light text-center md:text-left">
              신앙 안에서 진지한 관계를 고민하며
              <br />
              아름다운 만남을 이루고자 하는
              <strong className="text-[#D68C82] font-bold text-lg md:text-xl block mt-3 md:mt-4">
                87~99년생 미혼인 초원성경앱 유저
              </strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.2,
            }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900 tracking-tight text-center md:text-left">
              참가 안내
            </h2>
            <ul className="space-y-4 md:space-y-6 text-[#6B6661] font-light text-sm md:text-base">
              {[
                { label: "참가비", desc: "15만원" },
                { label: "결제방식", desc: "카드결제 (무이자 할부 결제 지원)" },
                {
                  label: "환불 규정",
                  desc: "4월 26일(일) 23:59까지 전액 환불, 이후 불가",
                },
                {
                  label: "No-Show 패널티",
                  desc: "무단 불참 시 다음 회차 참가 자격 박탈",
                },
                {
                  label: "사전 질문 & 후기",
                  desc: "회차별 진행 예정.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-[#FAF7F5] text-[#D68C82] rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-3 md:mr-4 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 md:w-[14px] md:h-[14px] stroke-[3]" />
                  </div>
                  <div className="leading-relaxed">
                    <strong className="font-semibold text-gray-900 mr-2">
                      {item.label}:
                    </strong>
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-20 md:py-36 px-6 text-center relative overflow-hidden flex items-center justify-center min-h-[50vh] md:min-h-[60vh] bg-[#FAF7F5]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInVariant}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-gray-900 mb-4 md:mb-6 leading-[1.3] tracking-tight">
            지금, 당신의 인연을 향한
            <br />
            첫걸음을 내딛으세요
          </h2>
          <p className="text-base md:text-xl text-[#6B6661] mb-8 md:mb-10 font-light leading-relaxed px-4 md:px-0">
            초원의 새로운 프로젝트 &lt;만나, 봄&gt;은
            <br />
            신앙 안에서 사랑을 꿈꾸는 당신을 초대합니다.
          </p>

          <div className="bg-white/80 backdrop-blur-sm px-6 py-4 md:px-8 md:py-5 rounded-2xl mb-8 md:mb-12 border border-[#D68C82]/30 shadow-sm flex items-center justify-center text-center max-w-2xl w-full">
            <p className="text-[13px] md:text-base text-[#8A5A53] font-medium leading-relaxed">
              본 프로그램은 초원이 봄을 맞이하여 준비한
              <br />
              파일럿 프로젝트로 추가 진행 여부는 미정이며,
              <br />
              조기 마감될 수 있습니다.
            </p>
          </div>

          <motion.a
            href="https://forms.gle/ovbNhNhxhpkrzBu77"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-bold text-white bg-[#D68C82] hover:bg-[#C27A71] rounded-full overflow-hidden transition-colors shadow-xl shadow-[#D68C82]/30 w-full sm:w-auto"
          >
            <span className="relative flex items-center gap-2 md:gap-3 tracking-wide">
              지금 바로 신청하기
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-[#999] text-sm bg-white border-t border-[#F2EBE9]">
        <p className="font-light tracking-wide">
          © Chowon all rights reserved.
        </p>
      </footer>
    </div>
  );
}
