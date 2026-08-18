import React, { useEffect } from "react";
import "../styles/SalamPage.css";
const SalamPage = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 60) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="salam-page">

      {/* =================================
          NAVBAR
      ================================= */}

      <nav className="navbar" id="navbar">

        <a href="/" className="brand">

          <div className="brand-icon">
            <i className="fa-solid fa-fire-flame-curved"></i>
          </div>

          <div>
            <div className="brand-text">
              قناديل شرعب
            </div>

            <small>
              أثرٌ من نور القرآن
            </small>
          </div>

        </a>

        <a href="/" className="back-link">

          العودة إلى موسوعة القناديل

          <i className="fa-solid fa-arrow-left"></i>

        </a>

      </nav>


      {/* =================================
          HERO
      ================================= */}

      <section className="hero">

        <div className="hero-bg"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content reveal">

          <div className="hero-number">
            القنديل رقم 23
          </div>

          <h1>

            الدكتور

            <span>
              عبد السلام
            </span>

            الحميري

          </h1>

          <div className="hero-line"></div>

          <div className="hero-subtitle">

            التربوي الذي أصبح صمام أمان للهوية اليمنية
            في القارة السمراء

          </div>

          <div className="hero-location">

            <i className="fa-solid fa-location-dot"></i>

            وادي الرِّعاء — شرعب الرونة — تعز

          </div>

        </div>

        <div className="hero-scroll">

          اقرأ السيرة

          <i className="fa-solid fa-chevron-down"></i>

        </div>

      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="intro">

        <div className="intro-grid">

          <div className="portrait reveal">

            <img
              src="/img/salam.jpg"
              alt="الدكتور عبد السلام الحميري"
            />

          </div>

          <div className="reveal">

            <div className="intro-label">
              قنديل من قناديل شرعب
            </div>

            <h2>

              رحلة بدأت من
              <br />
              مدرسة النور

            </h2>

            <p>

              في عام 1968م، ومن أفياء وادي الرِّعاء
              بشرعب الرونة، بزغ فجر حياة الدكتور
              عبد السلام الحميري، كأنموذج فريد
              قلّما نجد له مثيلاً.

            </p>

            <p>

              نشأ في كنف أسرة تنبض بالعلم،
              فكان والده الفقيه فرحان أحمد الحميري
              منارة أضاءت دروب شرعب، ومؤسس
              مدرسة النور التي أصبحت المحضن الأول
              لوعي ابنه وتكوين شخصيته القيادية.

            </p>

            <div className="quote">

              «التعليم ليس جدراناً وفصولاً،
              بل رسالة تحفظ الإنسان وهويته.»

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          STATS
      ================================= */}

      <section className="stats">

        <div className="stat">
          <strong>1968</strong>
          <span>عام الميلاد</span>
        </div>

        <div className="stat">
          <strong>1994</strong>
          <span>ليسانس الشريعة والقانون</span>
        </div>

        <div className="stat">
          <strong>2006</strong>
          <span>ماجستير القانون الدولي</span>
        </div>

        <div className="stat">
          <strong>2014</strong>
          <span>الدكتوراه في الإدارة</span>
        </div>

      </section>


      {/* =================================
          ARTICLE
      ================================= */}

      <section className="article-section">

        <div className="article">

          <div className="section-heading reveal">

            <small>
              السيرة والتجربة
            </small>

            <h2>
              مسيرة علمٍ عابرة للحدود
            </h2>

          </div>

          <p className="dropcap reveal">

            لم تكن نشأة الدكتور عبد السلام الحميري
            عادية، فقد تربى في مدرسة صنعت بدايات
            شخصيته العلمية والقيادية، وكان لصيقاً
            بوالده، يرتشف منه يومياً هيبة القيادة
            وحزم الإدارة.

          </p>

          <p className="reveal">

            وبذكاء فذ وحنكة مذهلة، استطاع وهو لا يزال
            في مرحلته الابتدائية أن ينوب عن والده في
            كثير من الأعمال في المدرسة عند غيابه،
            بل ونفخ روح الإبداع في طلاب المدرسة
            بتأسيس أول نواة للأنشطة الكشفية.

          </p>

          <p className="reveal">

            فكان المشرف والمعد للإذاعة المدرسية،
            والمؤسس لفرقتي الإنشاد والمسرح،
            واضعاً بذلك اللبنات الأولى لشخصية قيادية
            ستحمل مشعل التنوير شرقاً وغرباً.

          </p>

          <div className="article-highlight reveal">

            <p>

              لقد استطاع الدكتور عبد السلام أن يجعل
              من التعليم وسيلة لحماية الهوية،
              ومن المدرسة جسراً يصل اليمنيين
              بوطنهم وثقافتهم مهما ابتعدت بهم
              المسافات.

            </p>

          </div>

          <p className="reveal">

            انتقل طموحه إلى مجمع الفوز التربوي
            ليكمل مرحلتيه الإعدادية والثانوية،
            ويتخرج عام 1984م. وهناك واصل نشاطه
            الكشفي وأسّس فرق الإنشاد والمسرح
            برؤية أكثر تنظيماً وإبهاراً.

          </p>

          <p className="reveal">

            ثم التحق بمعهد مصعب وكيلاً ومديراً
            للأنشطة بمركز المديرية، فتحول العمل
            الكشفي تحت قيادته إلى نموذج يضاهي
            الأنظمة الكشفية في مراكز المحافظات،
            وغدا مسرح المعهد وفرقته الإنشادية
            صوتاً يتردد صداه في أرجاء المديريات
            المجاورة.

          </p>

          <p className="reveal">

            ثم انتقل ليدير معهدي قتيبة والخنساء
            في مديرية الوازعية، فكان الإبداع في
            أسمى معانيه، وكانت الإدارة في أبهى
            صورها.

          </p>

          <p className="reveal">

            وفي عام 1990م التحق الدكتور بجامعة صنعاء،
            حيث نال شهادة الليسانس من كلية الشريعة
            والقانون عام 1994م، ثم واصل مسيرته
            العلمية حتى حصل على درجة الماجستير
            في القانون الدولي عام 2006م،
            والدكتوراه في الإدارة عام 2014م.

          </p>

        </div>

      </section>


      {/* =================================
          JOURNEY
      ================================= */}

      <section className="journey">

        <div className="section-heading reveal">

          <small>
            محطات مضيئة
          </small>

          <h2>
            رحلة الدكتور عبد السلام
          </h2>

        </div>

        <div className="journey-container">

          <JourneyItem
            year="1968"
            title="الميلاد والنشأة"
            text="ولد في وادي الرِّعاء بشرعب الرونة، ونشأ في أسرة علمية على يد والده الفقيه فرحان أحمد الحميري."
          />

          <JourneyItem
            year="1984"
            title="التخرج من المرحلة الثانوية"
            text="تخرج من مجمع الفوز التربوي، بعد مسيرة حافلة بالنشاط الكشفي والمسرحي والإنشادي."
          />

          <JourneyItem
            year="1990 — 1994"
            title="جامعة صنعاء"
            text="التحق بكلية الشريعة والقانون بجامعة صنعاء وحصل على الليسانس عام 1994م."
          />

          <JourneyItem
            year="1995"
            title="بداية الرحلة إلى جيبوتي"
            text="حمل مشروعه التربوي والتنويري إلى دولة جيبوتي، وتولى إدارة مدرسة الجالية اليمنية."
          />

          <JourneyItem
            year="2006"
            title="مدارس طيبة"
            text="أسس مدارس طيبة في جيبوتي لتكون حصناً جديداً للغة العربية والهوية اليمنية."
          />

          <JourneyItem
            year="2012"
            title="العودة إلى تعز"
            text="عاد إلى تعز ليواصل مشروعه التربوي ويطوّر مدرسة الخليل وينطلق في مشروع مدارس زينب الأهلية."
          />

          <JourneyItem
            year="2014"
            title="موقف تربوي في زمن الحرب"
            text="ساهم في توفير مركز آمن للامتحانات لطلاب مدينة تعز خلال الظروف الاستثنائية التي شهدتها البلاد."
          />

        </div>

      </section>


      {/* =================================
          DJIBOUTI
      ================================= */}

      <section className="article-section">

        <div className="article">

          <div className="section-heading reveal">

            <small>
              التجربة الأفريقية
            </small>

            <h2>
              من اليمن إلى جيبوتي
            </h2>

          </div>

          <p className="reveal">

            في عام 1995م، حمل الدكتور مشروعه
            التنويري عابراً البحر نحو دولة جيبوتي.
            وهناك تولى إدارة مدرسة الجالية اليمنية
            بوصفه وكيلاً عاماً، وبإمكانيات محدودة
            ولكن بإرادة صلبة.

          </p>

          <p className="reveal">

            استطاع أن يفرض الطابع اليمني الأصيل
            في بيئة تعليمية كان يهيمن عليها
            المنهج الفرنسي، فصبغ التعليم للجالية
            اليمنية هناك بالهوية اليمنية، بدءاً
            من طابور الصباح وصولاً إلى تنظيم
            الحفلات المدرسية.

          </p>

          <p className="reveal">

            كما بادر بالتنسيق مع وزارتي التربية
            والتعليم اليمنية والجيبوتية لتحويل
            المدارس الأهلية الليلية في جيبوتي
            إلى مدارس تخضع لإشراف رسمي من
            وزارة التربية والتعليم اليمنية،
            ضماناً للحفاظ على الهوية اليمنية.

          </p>

          <div className="article-highlight reveal">

            <p>

              وفي واحدة من أبرز محطات تجربته،
              استطاع الدكتور عبد السلام أن يجعل
              من التعليم اليمني في جيبوتي
              جسراً للهوية والانتماء، لا مجرد
              مؤسسة تعليمية.

            </p>

          </div>

          <p className="reveal">

            وبجرأة تاريخية، واجه التحديات لافتتاح
            فرع الجامعة الوطنية في جيبوتي،
            كأول جامعة في دولة جيبوتي سواء
            حكومية أو أهلية، وتمكن بحنكته وعلاقاته
            من تحويل المشروع إلى واقع استقطب
            حتى أعضاء السلك الدبلوماسي العربي.

          </p>

          <p className="reveal">

            وعندما صدر قرار إيقاف فروع الجامعات
            اليمنية في الخارج عام 2006م، لم يستسلم،
            بل أسس مدارس طيبة في جيبوتي لتكون
            حصناً جديداً للغة العربية والهوية
            اليمنية.

          </p>

        </div>

      </section>


      {/* =================================
          ACHIEVEMENTS
      ================================= */}

      <section className="achievements">

        <div className="section-heading reveal">

          <small>
            أثر باقٍ
          </small>

          <h2>
            من إنجازاته ومحطات عطائه
          </h2>

        </div>

        <div className="achievement-grid">

          <Achievement
            icon="fa-school"
            title="مدارس زينب الأهلية"
            text="تحولت تحت إدارته إلى واحدة من التجارب التعليمية البارزة، وحصدت ثمانية مقاعد من العشرة الأوائل في الثانوية العامة على مستوى المحافظة."
          />

          <Achievement
            icon="fa-building-columns"
            title="مؤسسات تعليمية"
            text="امتد عطاؤه إلى تأسيس كلية طيبة الطبية الإدارية التقنية، وعدد من المعاهد والكليات والمدارس في مناطق مختلفة."
          />

          <Achievement
            icon="fa-earth-africa"
            title="التعليم خارج اليمن"
            text="أسهم في تأسيس وتطوير مشاريع تعليمية في جيبوتي، وحمل رسالة التعليم والهوية اليمنية إلى القارة السمراء."
          />

          <Achievement
            icon="fa-language"
            title="حماية الهوية"
            text="جعل من التعليم وسيلة لحماية اللغة العربية والهوية اليمنية بين أبناء الجالية اليمنية."
          />

          <Achievement
            icon="fa-people-group"
            title="خدمة المجتمع"
            text="امتد نشاطه إلى الإصلاح بين أبناء الجالية اليمنية وجمع شملهم تحت مظلة واحدة."
          />

          <Achievement
            icon="fa-shield-halved"
            title="صمام أمان تربوي"
            text="برز موقفه خلال الحرب حين عمل على توفير مركز امتحاني آمن لطلاب مدينة تعز."
          />

        </div>

      </section>


      {/* =================================
          WAR STORY
      ================================= */}

      <section className="article-section">

        <div className="article">

          <div className="section-heading reveal">

            <small>
              موقف لا يُنسى
            </small>

            <h2>
              التعليم في زمن الحرب
            </h2>

          </div>

          <p className="reveal">

            في نهاية عام 2014م، وحين كشّرت الحرب
            عن أنيابها وأغلقت مدارس تعز أبوابها،
            برز موقف الدكتور عبد السلام الحميري
            كعمل بطولي وتنسيقي فريد.

          </p>

          <p className="reveal">

            وحين قررت وزارة التربية بصنعاء نقل
            الامتحانات إلى منطقة الحوبان نظراً
            للوضع الأمني، أدرك الدكتور استحالة
            وصول الطلاب من داخل المدينة إلى هناك
            بسبب المواجهات.

          </p>

          <p className="reveal">

            فنسق مع الأستاذ توفيق الصوفي مدير
            مكتب التربية والتعليم بمديرية التعزية
            ولجنة الاختبارات القادمة من صنعاء،
            مقترحاً أن تكون مدارس زينب القريبة
            من المجمع القضائي مركزاً امتحانياً
            لطلاب المدينة.

          </p>

          <div className="article-highlight reveal">

            <p>

              وبمبادرة كريمة، تحمّل الدكتور
              تكاليف سير الامتحانات، وفتحت
              مدرسة زينب أبوابها لجميع طلاب
              المدينة، مسطرة بذلك فصلاً نادراً
              من الصمود التربوي.

            </p>

          </div>

          <p className="reveal">

            هكذا لم يكن التعليم بالنسبة للدكتور
            عبد السلام وظيفة تؤدى، وإنما رسالة
            ومسؤولية وموقف، خصوصاً عندما تصبح
            حماية مستقبل الطلاب واجباً يتقدم
            على كل الاعتبارات.

          </p>

        </div>

      </section>


      {/* =================================
          FINAL QUOTE
      ================================= */}

      <section className="final-quote">

        <div className="reveal">

          <i className="fa-solid fa-quote-right"></i>

          <p>

            من مدرسة النور في قرية صغيرة،
            إلى منارة تعليمية عابرة للحدود
            والبحار؛ بقي الدكتور عبد السلام
            الحميري يحمل مشعل العلم،
            ويحرس هوية وطنه، ويفتح الطريق
            أمام أجيال من الطلاب.

          </p>

          <span>

            الدكتور عبد السلام فرحان الحميري
            — أحد قناديل شرعب

          </span>

        </div>

      </section>


      {/* =================================
          BACK
      ================================= */}

      <section className="back-section">

        <a href="/" className="back-btn">

          <i className="fa-solid fa-arrow-right"></i>

          العودة إلى موسوعة قناديل شرعب

        </a>

      </section>


      {/* =================================
          FOOTER
      ================================= */}

      <footer>

        <div className="footer-brand">
          قناديل شرعب
        </div>

        <p className="footer-text">

          مشروع توثيقي يحفظ سير القناديل والعلماء
          والمربين وأصحاب الأثر من أبناء شرعب،
          لتبقى قصصهم حاضرة في ذاكرة الأجيال.

        </p>

        <div className="copyright">

          © {new Date().getFullYear()}

          قناديل شرعب

          — أثرٌ من نور القرآن

        </div>

      </footer>

    </div>
  );
};


/* =================================
   COMPONENTS
================================= */

const JourneyItem = ({ year, title, text }) => (
  <div className="journey-item reveal">

    <div className="journey-dot"></div>

    <div className="journey-year">
      {year}
    </div>

    <h3>
      {title}
    </h3>

    <p>
      {text}
    </p>

  </div>
);


const Achievement = ({ icon, title, text }) => (
  <div className="achievement reveal">

    <div className="achievement-icon">

      <i className={`fa-solid ${icon}`}></i>

    </div>

    <h3>
      {title}
    </h3>

    <p>
      {text}
    </p>

  </div>
);


export default SalamPage;