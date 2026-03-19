import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Coach {
  id: string;
  userId?: string;
  firstName: string;
  lastName: string;
  areas: string[];
  description: string;
  hourlyRate: number;
}

export interface CoachFormData {
  first: string;
  last: string;
  desc: string;
  rate: number;
  areas: string[];
  userId?: string;
}

export const useCoachesStore = defineStore("coaches", () => {
  const coaches = ref<Coach[]>([
    {
      id: "c1",
      firstName: "Layne",
      lastName: "Norton",
      areas: ["powerlifting", "bodybuilding", "fitness"],
      description:
        "Layne Norton is a physique coach, a natural professional bodybuilder and powerlifter, and holds a Ph. D. in nutritional sciences.",
      hourlyRate: 40,
    },
    {
      id: "c2",
      firstName: "Jeff",
      lastName: "Nippard",
      areas: ["powerlifting", "bodybuilding"],
      description:
        "is a Canadian professional bodybuilder, fitness coach, YouTuber, and powerlifter. He is best known for his informative and entertaining fitness videos on his youtube channel.",
      hourlyRate: 31,
    },
    {
      id: "c3",
      firstName: "Mike",
      lastName: "Israetel",
      areas: ["bodybuilding", "fitness"],
      description:
        "Cofounder of Renaissance Periodization, Dr. Mike Israetel holds a PhD in Sport Physiology from East Tennessee State University.",
      hourlyRate: 45,
    },
    {
      id: "c4",
      firstName: "Sarah",
      lastName: "Mitchell",
      areas: ["fitness", "nutrition"],
      description:
        "Sarah Mitchell is a certified personal trainer and nutrition coach with over 10 years of experience helping clients achieve sustainable lifestyle transformations.",
      hourlyRate: 35,
    },
    {
      id: "c5",
      firstName: "Carlos",
      lastName: "Vega",
      areas: ["powerlifting", "strength"],
      description:
        "Carlos Vega is a competitive powerlifter and strength coach based in Miami. He has coached dozens of athletes to national-level competition.",
      hourlyRate: 38,
    },
    {
      id: "c6",
      firstName: "Emma",
      lastName: "Clarke",
      areas: ["yoga", "fitness"],
      description:
        "Emma Clarke is a certified yoga instructor and fitness coach specializing in mind-body balance, flexibility training, and stress reduction through movement.",
      hourlyRate: 29,
    },
    {
      id: "c7",
      firstName: "Darius",
      lastName: "Okonkwo",
      areas: ["bodybuilding", "nutrition"],
      description:
        "Darius Okonkwo is an IFBB-level bodybuilder and nutrition specialist who has helped hundreds of clients optimize their physiques through evidence-based diet and training protocols.",
      hourlyRate: 50,
    },
    {
      id: "c8",
      firstName: "Hana",
      lastName: "Suzuki",
      areas: ["fitness", "yoga"],
      description:
        "Hana Suzuki combines functional fitness training with yoga methodology to help clients build strength, mobility, and mental clarity.",
      hourlyRate: 33,
    },
    {
      id: "c9",
      firstName: "Marcus",
      lastName: "Brennan",
      areas: ["strength", "powerlifting"],
      description:
        "Marcus Brennan is a former collegiate athlete turned strength coach. He specializes in progressive overload programming and peaking cycles for competitive lifters.",
      hourlyRate: 42,
    },
    {
      id: "c10",
      firstName: "Priya",
      lastName: "Sharma",
      areas: ["nutrition", "fitness"],
      description:
        "Priya Sharma is a registered dietitian and fitness coach who takes a holistic approach to health, combining clinical nutrition expertise with practical training advice.",
      hourlyRate: 47,
    },
    {
      id: "c11",
      firstName: "Tom",
      lastName: "Eriksson",
      areas: ["bodybuilding", "strength", "fitness"],
      description:
        "Tom Eriksson is a Swedish-born coach who competed in natural bodybuilding for 12 years before transitioning to full-time coaching. Known for his science-driven, no-nonsense programming style.",
      hourlyRate: 36,
    },
    {
      id: "c12",
      firstName: "Aaliyah",
      lastName: "Washington",
      areas: ["fitness", "nutrition"],
      description:
        "Aaliyah Washington is a certified health coach and personal trainer focused on empowering women to build confidence and strength through progressive resistance training.",
      hourlyRate: 30,
    },
    {
      id: "c13",
      firstName: "Nico",
      lastName: "Ferrara",
      areas: ["powerlifting", "bodybuilding", "strength"],
      description:
        "Nico Ferrara is an Italian strength coach and former national-level powerlifter. He blends traditional European lifting methodology with modern periodization science.",
      hourlyRate: 44,
    },
    {
      id: "c14",
      firstName: "Yuki",
      lastName: "Tanaka",
      areas: ["yoga", "fitness", "nutrition"],
      description:
        "Yuki Tanaka is a holistic wellness coach with certifications in yoga, sports nutrition, and personal training. She helps busy professionals maintain health through efficient, balanced programming.",
      hourlyRate: 38,
    },
    {
      id: "c15",
      firstName: "Brandon",
      lastName: "Cole",
      areas: ["strength", "bodybuilding"],
      description:
        "Brandon Cole is a physique and strength coach with a background in exercise science. He has coached athletes from recreational lifters to competitive bodybuilders across multiple federations.",
      hourlyRate: 41,
    },
    {
      id: "c16",
      firstName: "Mia",
      lastName: "Petrov",
      areas: ["fitness", "yoga"],
      description:
        "Mia Petrov is a movement specialist and yoga teacher who blends breath work, mindfulness, and functional training into a seamless coaching experience.",
      hourlyRate: 27,
    },
    {
      id: "c17",
      firstName: "James",
      lastName: "O'Brien",
      areas: ["powerlifting", "strength", "nutrition"],
      description:
        "James O'Brien is an Irish strength coach and sports nutritionist who has worked with rugby players, powerlifters, and everyday athletes looking to get stronger and leaner.",
      hourlyRate: 39,
    },
    {
      id: "c18",
      firstName: "Fatima",
      lastName: "Al-Hassan",
      areas: ["fitness", "nutrition"],
      description:
        "Fatima Al-Hassan is an internationally certified personal trainer and nutrition coach. She specializes in helping clients build sustainable healthy habits through individualized programming.",
      hourlyRate: 34,
    },
    {
      id: "c19",
      firstName: "Luca",
      lastName: "Marchetti",
      areas: ["bodybuilding", "fitness", "strength"],
      description:
        "Luca Marchetti is an Italian-American bodybuilding coach and personal trainer. With 15 years in the industry, he is known for his detail-oriented approach to hypertrophy and body recomposition.",
      hourlyRate: 48,
    },
    {
      id: "c20",
      firstName: "Rachel",
      lastName: "Kim",
      areas: ["yoga", "nutrition", "fitness"],
      description:
        "Rachel Kim is a certified yoga instructor, registered nutritionist, and personal trainer who helps clients achieve balance between performance and well-being.",
      hourlyRate: 32,
    },
    {
      id: "c21",
      firstName: "Devon",
      lastName: "Harper",
      areas: ["strength", "powerlifting"],
      description:
        "Devon Harper is a strength and conditioning coach specializing in powerlifting prep. He has taken over 30 athletes to the podium at regional and national meets.",
      hourlyRate: 43,
    },
    {
      id: "c22",
      firstName: "Ingrid",
      lastName: "Holmberg",
      areas: ["fitness", "yoga", "nutrition"],
      description:
        "Ingrid Holmberg is a Swedish wellness coach known for her calm, structured approach to fitness. She integrates yoga, nutrition, and resistance training into comprehensive lifestyle programs.",
      hourlyRate: 37,
    },
    {
      id: "c23",
      firstName: "Kwame",
      lastName: "Asante",
      areas: ["bodybuilding", "nutrition", "strength"],
      description:
        "Kwame Asante is a natural bodybuilding champion and certified sports nutritionist. He coaches athletes on contest prep, offseason muscle building, and sustainable nutrition strategies.",
      hourlyRate: 46,
    },
  ]);

  const lastFetch = ref<number | null>(null);

  const hasCoaches = computed(() => coaches.value.length > 0);

  const getCoaches = computed(() => coaches.value);

  const getCoachById = (id: string) => {
    return coaches.value.find((c) => c.id === id);
  };

  const isCoach = (userId: string) => {
    return coaches.value.some((c) => c.userId === userId);
  };

  const registerCoach = (coachData: CoachFormData) => {
    const newCoach: Coach = {
      id: "c" + Date.now(),
      userId: coachData.userId,
      firstName: coachData.first,
      lastName: coachData.last,
      description: coachData.desc,
      hourlyRate: coachData.rate,
      areas: coachData.areas,
    };

    coaches.value.push(newCoach);
  };

  const loadCoaches = async ({
    forceRefresh = false,
  }: { forceRefresh?: boolean } = {}) => {
    if (
      !forceRefresh &&
      lastFetch.value &&
      Date.now() - lastFetch.value < 60000
    ) {
      return;
    }

    lastFetch.value = Date.now();
  };

  return {
    coaches,
    lastFetch,
    hasCoaches,
    getCoaches,
    getCoachById,
    isCoach,
    registerCoach,
    loadCoaches,
  };
});
