<template>
  <div>
    <div>
      <!-- class info section -->
      <section>
        <!-- info text -->
        <div class="flex gap-1 items-center font-semibold text-red-500 mb-1 text-sm">
          <div>
            <span>다회차</span>
          </div>
          <div class="w-1 h-1 bg-red-500"></div>
          <div>
            <span>온라인 LIVE</span>
          </div>
          <div class="w-1 h-1 bg-red-500"></div>
          <div>
            <span>최대 30명</span>
          </div>
        </div>
        <!-- class title -->
        <div class="mb-3">
          <h1 class="text-2xl font-bold">오픽토스 만점자랑 실생활 영어문장 만들고 피드백받기 3</h1>
        </div>
        <!-- tutor avatar -->
        <div class="mb-3">
          <div class="flex gap-2 items-center">
            <div class="w-10 h-10">
              <img
                class="rounded-full"
                :src="require('@/assets/resources/avatar.svg')"
                alt="tutor"
              />
            </div>
            <div>
              <div>
                <span class="text-sm">김탈잉 Bob 튜터</span>
              </div>
              <div class="flex items-center">
                <img
                  class="w-3 h-3"
                  :src="require('@/assets/resources/icon_star.png')"
                  alt="rating"
                />
                <span class="text-sm ml-1">5.0(6)</span>
              </div>
            </div>
          </div>
        </div>
        <!-- image & img-slide -->
        <!--  TODO: swiper thumbs gallery -->
        <div>
          <div>
            <img class="rounded-md" :src="require('@/assets/resources/swiper_img.jpg')" alt="" />
          </div>
        </div>
      </section>

      <!-- class description section -->
      <section>
        <div class="mt-16">
          <div class="class-desc">
            <div class="class-desc-col-title">
              <span>col 타이틀</span>
            </div>
            <div class="class-desc-col-desc">
              <div class="desc-text-wrap">area v-html 높이 600px 이상이면 더보기 버튼</div>
              <!-- 더보기, 접기 버튼 -->
              <div class="text-center">
                <button class="btn-more-less btn-more">+ 더보기</button>
                <button class="btn-more-less btn-less">- 접기</button>
              </div>
            </div>
          </div>
          <div class="class-desc">
            <div class="class-desc-col-title">
              <span>클래스 요약</span>
            </div>
            <div class="class-desc-col-desc">
              <div class="desc-text-wrap">
                '집에 마스크 두고 오기 VS 집에 폰 두고 오기' 영어로 대답하면?<br />재밌는 밸런스
                게임 일기로 하루 30분! 토스만점자의 피드백이 더해진 나만의 이야기를 만드세요.<br /><br />
                2주 동안 10번의 일기를 쓰면 클래스 가격의 반값, 20,000을 포인트로 돌려드립니다.
              </div>
              <!-- 더보기, 접기 버튼 -->
              <div class="text-center">
                <button class="btn-more-less btn-more">+ 더보기</button>
                <button class="btn-more-less btn-less">- 접기</button>
              </div>
            </div>
          </div>
          <div class="class-desc">
            <div class="class-desc-col-title">
              <span>이런 분들이 들으면 좋아요.</span>
            </div>
            <div class="class-desc-col-desc">
              <div class="desc-text-wrap">
                💌영어 일기를 쓰며 정해진 시간에 영어공부 루틴을 만들고 싶은 분들<br />
                💌영어 일기를 쓰고는 싶지만 쓰고 나서 첨삭해 줄 사람이 없어 답답~하셨던 분들<br />
                💌단어 몇 개만 나열하고 완전한 문장을 만들기 어려운 분들<br />
                💌외국인이랑 편하고 자연스러운 영어를 하고 싶은 교환학생, 유학생<br />
                💌한국어로 'ㅋㅋㅋ' 웃는데 영어로 어떻게 웃는지 모르는 사람 (lol만 아는 사람)
                <br /><br />그동안 하고 싶은 말은 많았지만 어떻게 말을 해야할지 몰랐던 부분들을 모두
                시원하게 알려드립니다. 실제로 학생들을 가르치며 매일 영어일기를 첨삭하는 영어일기
                전문가 선생님과 함께 영어일기 쓰기 시작해요❣
              </div>
              <!-- 더보기, 접기 버튼 -->
              <div class="text-center">
                <button class="btn-more-less btn-more">+ 더보기</button>
                <button class="btn-more-less btn-less">- 접기</button>
              </div>
            </div>
          </div>
          <div class="class-desc">
            <div class="class-desc-col-title">
              <span>어떤 클래스 인가요?</span>
            </div>
            <div class="class-desc-col-desc">
              <div class="desc-text-wrap">
                <p class="text_area">
                  <img
                    src="//img.taling.me/Content/Uploads/Curri/d9a4960e0e2d16bb14c9759c67eec4c7be3e5b09.png"
                    alt=""
                    style="display: block; margin-bottom: 30px"
                  />
                  영어 일기는 내가 하고 싶은 말을 직접 쓸 수 있기 때문에 다른 어떤 영어 공부보다도
                  "내 것"으로 만들 수 있게 됩니다! 하지만 막상 시간이 확보되어도 영어로 문장을
                  끄적이려니 막막하실 거예요. <br />
                  <br />
                  그렇다면, 2주 동안 총 10번의 재밌는 밸런스 게임 주제와 내 생각을 끄적일 수 있는
                  고급스러운 영어 표현들을 배울 수 있다면 어떨까요?<br />
                  <br />
                  🐥 예를 들어볼까요? 🐥<br />
                  '집에 마스크 두고 오기' VS '집에 폰 두고 오기' <br />
                  <br />
                  바로 영어로 생각하고 쓸 수 있나요? 간단해 보이지만 영어 표현으로 이게 맞나? 하면서
                  고민이 될 거예요.😥 <br />
                  <br />
                  그럼 이런 표현을 보며 쓸 수 있다면? 훨씬 수월할 거예요. <br />
                  <br />
                  ✏ be not allowed to enter the public place 공공장소에 들어가는 게 허용되지
                  않는다.<br />
                  ✏ stop somebody from doing something …이 …하는 것을 그만두게 하다.<br />
                  ✏ End up + ing : 결국 ~하게 되다.<br />
                  ✏ Must-have item 필수 물건<br />
                  <br />
                  내 생각을 표현할 수 있도록 주제별 꼭 쓰면 좋은 표현, 주제별 키워드, 그리고 영어식
                  표현들을 보며, 머릿속으로만 맴돌았던 내 생각을 쓸 수 있게 됩니다!😎<br />
                  <br />
                  처음엔 어려울 수 있어요. 하지만 튜터가 제공하는 고급 표현과 24시간 내에 제공되는
                  피드백을 통해 조금씩 나아지는 나를 발견할 수 있어요. 2주가 지나면 좋은 영어 표현
                  50문장을 체득할 수 있고, 영어 일기 쓰기가 내 일상의 루틴이 되어 있을 거예요.<br />
                  <br />
                  저와 밸런스 게임 해보실래요?👾 <br />
                </p>
              </div>
              <!-- 더보기, 접기 버튼 -->
              <div class="text-center">
                <button class="btn-more-less btn-more">+ 더보기</button>
                <button class="btn-more-less btn-less">- 접기</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- class review section -->
      <section>
        <div>
          <!-- rating -->
          <div class="class-desc">
            <div class="class-desc-col-title">
              <span>실제 수강생 의 리뷰입니 다.</span>
            </div>
            <div class="class-desc-col-desc">
              <div class="p-2 border rounded-md border-gray-400">
                <div class="grid grid-cols-3">
                  <div class="flex gap-6 justify-center">
                    <div>
                      <span>커리큘럼</span>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-3 h-3"
                        :src="require('@/assets/resources/icon_star.png')"
                        alt="rating"
                      />
                      <span class="text-sm ml-1">5.0</span>
                    </div>
                  </div>
                  <div class="flex gap-6 justify-center">
                    <div>
                      <span>커리큘럼</span>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-3 h-3"
                        :src="require('@/assets/resources/icon_star.png')"
                        alt="rating"
                      />
                      <span class="text-sm ml-1">5.0</span>
                    </div>
                  </div>
                  <div class="flex gap-6 justify-center">
                    <div>
                      <span>커리큘럼</span>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-3 h-3"
                        :src="require('@/assets/resources/icon_star.png')"
                        alt="rating"
                      />
                      <span class="text-sm ml-1">5.0</span>
                    </div>
                  </div>
                  <div class="flex gap-6 justify-center">
                    <div>
                      <span>커리큘럼</span>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-3 h-3"
                        :src="require('@/assets/resources/icon_star.png')"
                        alt="rating"
                      />
                      <span class="text-sm ml-1">5.0</span>
                    </div>
                  </div>
                  <div class="flex gap-6 justify-center">
                    <div>
                      <span>커리큘럼</span>
                    </div>
                    <div class="flex items-center">
                      <img
                        class="w-3 h-3"
                        :src="require('@/assets/resources/icon_star.png')"
                        alt="rating"
                      />
                      <span class="text-sm ml-1">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-right mt-2">
                <button>
                  <span class="underline">리뷰 작성하기</span>
                </button>
              </div>
            </div>
          </div>

          <!-- review -->
          <div class="class-desc">
            <div class="class-desc-col-title">
              <span></span>
            </div>
            <div class="class-desc-col-desc">
              <ClassReview />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClassReview from '@/components/Class/ClassReview.vue';
</script>

<style scoped>
@import url('../../assets/css/ClassDetail.css');
</style>
