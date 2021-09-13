// creating an array and passing the number, questions, options

let questions = [
      {
      numb: 1,
      type:"select",
      question: "كم عدد أفراد العائلة البالغين من العمر 18 عاما وأكثر الرجال والنساء معك وباستثناء من يقيم خارج المنزل للدراسة أو غير ذلك ؟",
      options: [
        "1",
        "6-1",
        "اكثر من 6",
      ]
    },
    {
      numb: 2,
      type:"select",
      question: "الجنس ؟",
      options: [
        "ذكر",
        "أنثى"
      ]
    },
    {
      numb: 3,
      question: "العمر ؟",
      type:"input",
      options: [""]
    },
    {
      numb: 4,
      type:"input",
      question: "كم عدد الرجال البالغين من العمر 18 عاما وأكثر في الأسرة؟",
      options: [""]
    },
    {
      numb: 5,
      type:"input",
      question: "كم عدد النساء البالغين من العمر 18 عاما وأكثر في الأسرة؟",
      options: [""]
    },
    {
      numb: 6,
      question: "ما هي المدينة التي تقيم بها حاليا ؟",
      type:"input",
      options: [""]
      /*options: [
        "الرياض",
        "مكة المكرمة",
        "جازان",
        "عسير",
        "المدينة المنورة",
        "مكة المكرمة",
        "الدمام",
        "القصيم",
        "تبوك",
        "حائل",
        "نجران",
        "الباحة",
        "الجوف",
        "الحدود الشمالية",
      ]*/
    },
    {
      numb: 7,
      type:"input",
      question: "كم عدد البالغين من العمر 18 عاما وأكثر المقيمين معك في المنزل ؟",
      options: [
        ""
      ]
    },
    {
      numb: 8,
      type:"select",
      question: "الجنس ؟",
      options: [
        "متزوج",
        "مطلق",
        "أرمل",
        "أعزب",
        "رفض الإجابة"
      ]
    },
    {
      numb: 9,
      type:"select",
      question: "ما هي السنة الدراسية أو أعلى درجة علمية حصلت عليها ؟",
      options: [
        "لم أدخل المدرسة",
        "ابتدائي",
        "متوسط",
        "ثانوي",
        "دبلوم بعد الثانوني",
        "جامعي فأعلى",
        "رفض الإجابة"
      ]
    },
    {
      numb: 10,
      type:"select",
      question: "هل منزلك ملك أم مستأجر ؟",
      options: [
        "ملك",
        "مستأجر",
        "أخرى",
        "ثانوي",
        "لا أعرف/ لست متأكدا",
        "رفض الإجابة"
      ]
    },
  /*
  {
    sec:"Z" [
      {
        numb: 5,
        question: "What does XML stand for?",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
        ]
      }
    ]
  },*/
];