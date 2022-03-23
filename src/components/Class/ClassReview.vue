<template>
  <div>
    <div>
      <!-- review box -->
      <div class="mb-4 pb-4 border-b border-gray-300">
        <!-- user review -->
        <div class="flex items-center">
          <div class="w-12 mr-4">
            <img class="rounded-full" :src="require('@/assets/resources/profile.png')" alt="user" />
          </div>
          <div>
            <div class="text-sm">
              <p>최지아</p>
              <p class="text-gray-500">2022-03-19 17:52:26</p>
            </div>
          </div>
        </div>
        <div class="mt-1 ml-16">
          <p class="text-sm">
            너무 좋았어요! 자연스러운 표현들도 배우고 10시마다 영어일기 쓰는 습관을 자연스럽게 들일
            수 있어서 만족스럽습니다 ㅎㅎ 선생님 목소리도 좋으시고 친절하세요!
          </p>
          <div class="flex gap-5 mt-2">
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/like-heart.webp')" alt="like" />
              <span>0</span>
            </button>
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/reply.png')" alt="reply" />
              <span>0</span>
            </button>
          </div>
        </div>
        <!-- tutor comment -->
        <div></div>
      </div>

      <div class="mb-4 pb-4 border-b border-gray-300">
        <!-- user review -->
        <div class="flex items-center">
          <div class="w-12 mr-4">
            <img class="rounded-full" :src="require('@/assets/resources/profile.png')" alt="user" />
          </div>
          <div>
            <div class="text-sm">
              <p>이종호(sadi)</p>
              <p class="text-gray-500">2022-02-27 21:24:43</p>
            </div>
          </div>
        </div>
        <div class="mt-1 ml-16">
          <p class="text-sm">
            크게 기대하지 않고 수강신청했지만, 매번 수업준비를 철저히 해주시어 재미있게 잘 따라갈 수
            있었습니다. 특히 피드백을 통해서 문장의 스타일과 문법 모두를 향상시킬 수 있었습니다.
            계속 수강할 예정입니다.
          </p>
          <div class="flex gap-5 mt-2">
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/like-heart.webp')" alt="like" />
              <span>0</span>
            </button>
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/reply.png')" alt="reply" />
              <span>1</span>
            </button>
          </div>
        </div>
        <!-- tutor comment -->
        <div class="ml-16 mt-3">
          <div class="flex items-center">
            <div class="w-10 mr-4">
              <img
                class="rounded-full"
                :src="require('@/assets/resources/profile.png')"
                alt="user"
              />
            </div>
            <div>
              <div class="text-sm">
                <div class="flex items-center gap-2">
                  <p>최화영 Jenn</p>
                  <img
                    class="w-4 h-4"
                    :src="require('@/assets/resources/tutor_badge.webp')"
                    alt="tutor badge"
                  />
                </div>
                <p class="text-gray-500">2022-02-27 23:43:58</p>
              </div>
            </div>
          </div>
          <div class="mt-1 ml-16">
            <p class="text-sm bg-red-100 p-4 rounded-r-lg rounded-bl-lg">
              종호님 너무 멋진 문장 스킬을 가지고 계셔서 그 스타일을 살리며 피드백을 드리려고 신경
              썼어요! 😄 영어 실력도 좋으신데 성실함까지! 이번 챌린지 열심히 참여해주셔서 저도 너무
              좋았습니다👍 앞으로도 영어 공부 화이팅!
            </p>
          </div>
        </div>
      </div>

      <div class="mb-4 pb-4 border-b border-gray-300">
        <!-- user review -->
        <div class="flex items-center">
          <div class="w-12 mr-4">
            <img class="rounded-full" :src="require('@/assets/resources/profile.png')" alt="user" />
          </div>
          <div>
            <div class="text-sm">
              <p>최지아</p>
              <p class="text-gray-500">2022-03-19 17:52:26</p>
            </div>
          </div>
        </div>
        <div class="mt-1 ml-16">
          <p class="text-sm">
            너무 좋았어요! 자연스러운 표현들도 배우고 10시마다 영어일기 쓰는 습관을 자연스럽게 들일
            수 있어서 만족스럽습니다 ㅎㅎ 선생님 목소리도 좋으시고 친절하세요!
          </p>
          <div class="flex gap-5 mt-2">
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/like-heart.webp')" alt="like" />
              <span>0</span>
            </button>
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/reply.png')" alt="reply" />
              <span>0</span>
            </button>
          </div>
        </div>
        <!-- tutor comment -->
        <div></div>
      </div>

      <div class="mb-4 pb-4 border-b border-gray-300">
        <!-- user review -->
        <div class="flex items-center">
          <div class="w-12 mr-4">
            <img class="rounded-full" :src="require('@/assets/resources/profile.png')" alt="user" />
          </div>
          <div>
            <div class="text-sm">
              <p>최지아</p>
              <p class="text-gray-500">2022-03-19 17:52:26</p>
            </div>
          </div>
        </div>
        <div class="mt-1 ml-16">
          <p class="text-sm">
            너무 좋았어요! 자연스러운 표현들도 배우고 10시마다 영어일기 쓰는 습관을 자연스럽게 들일
            수 있어서 만족스럽습니다 ㅎㅎ 선생님 목소리도 좋으시고 친절하세요!
          </p>
          <div class="flex gap-5 mt-2">
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/like-heart.webp')" alt="like" />
              <span>0</span>
            </button>
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/reply.png')" alt="reply" />
              <span>0</span>
            </button>
          </div>
        </div>
        <!-- tutor comment -->
        <div></div>
      </div>

      <div class="mb-4 pb-4 border-b border-gray-300">
        <!-- user review -->
        <div class="flex items-center">
          <div class="w-12 mr-4">
            <img class="rounded-full" :src="require('@/assets/resources/profile.png')" alt="user" />
          </div>
          <div>
            <div class="text-sm">
              <p>최지아</p>
              <p class="text-gray-500">2022-03-19 17:52:26</p>
            </div>
          </div>
        </div>
        <div class="mt-1 ml-16">
          <p class="text-sm">
            너무 좋았어요! 자연스러운 표현들도 배우고 10시마다 영어일기 쓰는 습관을 자연스럽게 들일
            수 있어서 만족스럽습니다 ㅎㅎ 선생님 목소리도 좋으시고 친절하세요!
          </p>
          <div class="flex gap-5 mt-2">
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/like-heart.webp')" alt="like" />
              <span>0</span>
            </button>
            <button class="btn-like-reply">
              <img class="w-4" :src="require('@/assets/resources/reply.png')" alt="reply" />
              <span>0</span>
            </button>
          </div>
        </div>
        <!-- tutor comment -->
        <div></div>
      </div>
    </div>

    <div>
      <div class="flex gap-4 justify-center">
        <button>prev</button>
        <div class="flex gap-4">
          <button>1</button>
          <button>2</button>
        </div>
        <button>next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn-like-reply {
  @apply flex items-center gap-2 text-sm text-gray-500;
}
</style>
