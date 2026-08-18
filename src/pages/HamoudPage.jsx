 import "../styles/HamoudPage.css";

const HamoudPage = () => {
  return (
    <div className="hamoud-page">

      {/* NAVBAR */}
      <nav className="navbar">

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

        <a href="/" className="back">

          <i className="fa-solid fa-arrow-right"></i>

          <span>
            العودة إلى موسوعة القناديل
          </span>

        </a>

      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-container">

          <div className="portrait">

            <img
              src="/img/hamoud.jpg"
              alt="الأستاذ حمود علي مهيوب الطيار"
            />

            <div className="portrait-image-overlay"></div>

            <div className="portrait-frame"></div>

            <div className="portrait-label">
              الأستاذ حمود علي مهيوب الطيار
            </div>

          </div>


          <div>

            <div className="hero-kicker">
              قنديل من قناديل شرعب
            </div>

            <h1 className="hero-title">
              الأستاذ حمود علي مهيوب الطيار
            </h1>

            <div className="hero-location">
              <i className="fa-solid fa-location-dot"></i>
              وادي الريم — عزلة عنشق عسيلة — ناحية السلام
            </div>

            <div className="hero-years">
              1371هـ — 1952م
            </div>

            <p className="hero-description">
              أستاذ ومربٍ تربوي، عُرف بالنزاهة والمسؤولية،
              وقضى عقودًا في خدمة التعليم والتوجيه التربوي
              والعمل المجتمعي والتعاوني، وأسهم في تعليم أجيال
              أصبح منهم الأطباء والمهندسون وأساتذة الجامعات
              والقادة والعلماء.
            </p>

            <div className="tags">

              {[
                "التربية والتعليم",
                "التوجيه التربوي",
                "النزاهة",
                "العمل التعاوني",
                "بناء الإنسان",
              ].map((tag) => (
                <div className="tag" key={tag}>
                  {tag}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CONTENT */}
      <main className="content">


        {/* BASIC INFORMATION */}
        <section className="section">

          <SectionHeading
            kicker="بطاقة التوثيق"
            title="معلومات أساسية"
            icon="fa-circle-info"
          />

          <div className="info-grid">

            <InfoCard
              icon="fa-calendar-days"
              label="سنة الميلاد"
              value="1371هـ / 1952م"
            />

            <InfoCard
              icon="fa-location-dot"
              label="مكان الميلاد"
              value="وادي الريم — عنشق عسيلة"
            />

            <InfoCard
              icon="fa-school"
              label="المجال الرئيسي"
              value="التربية والتعليم"
            />

            <InfoCard
              icon="fa-graduation-cap"
              label="أعلى مؤهل مذكور"
              value="كلية الشريعة والقانون"
            />

            <InfoCard
              icon="fa-calendar-check"
              label="التخرج"
              value="1983م — جيد جدًا مرتفع"
            />

            <InfoCard
              icon="fa-building-columns"
              label="آخر منصب مذكور"
              value="مستشار وزارة التربية والتعليم"
            />

          </div>

        </section>


        {/* STORY */}
        <section className="section">

          <SectionHeading
            kicker="النشأة والبدايات"
            title="من وادي الريم بدأت الحكاية"
            icon="fa-seedling"
          />

          <div className="story">

            <p>
              في عام <strong>1952م الموافق 1371هـ</strong>،
              ولد الأستاذ حمود علي مهيوب الطيار في قرية
              <strong> وادي الريم</strong>، عزلة عنشق عسيلة،
              ناحية السلام.
            </p>

            <p>
              وفي سن مبكرة غيّب الموت والده، فتولت والدته
              دور الأب والأم معًا، ولم تكتفِ بالحرص على تعليمه،
              بل غرست في نفسه قيمًا ومبادئ ظلت رفيقة مسيرته
              وسياجًا لشخصيته طوال حياته.
            </p>

            <p>
              بدأت رحلته المعرفية في معلامة الفقيه
              <strong> عبده علي جباري</strong> بقرية المحدادة،
              حيث تعلم الأبجدية وتلقى قصار السور.
            </p>

            <p>
              ثم انتقل إلى معلامة الفقيه
              <strong> قائد ناجي خالد</strong> في قرية بيت حاشد،
              وهناك قرأ القرآن الكريم وحفظ أجزاءً منه.
            </p>

            <p>
              وبعد ذلك أسس معلامة خاصة به، تقاطر إليها الطلاب
              من قرى دفان ووادي الريم وحاشد، واستمر في تعليمهم
              قرابة سنتين.
            </p>

          </div>

        </section>


        {/* EDUCATION */}
        <section className="section">

          <SectionHeading
            kicker="الرحلة العلمية"
            title="محطات في طلب العلم"
            icon="fa-graduation-cap"
          />

          <div className="education-grid">

            <EducationCard
              icon="fa-book-open"
              title="معلّمة المحدادة"
              text="تعلم الأبجدية وقصار السور"
            />

            <EducationCard
              icon="fa-book-quran"
              title="بيت حاشد"
              text="قراءة القرآن وحفظ أجزاء منه"
            />

            <EducationCard
              icon="fa-chalkboard-user"
              title="مدرسة جعفر الطيار"
              text="مواصلة التحصيل والمعرفة"
            />

            <EducationCard
              icon="fa-users"
              title="دورات المعلمين"
              text="تعز وإب والحديدة"
            />

            <EducationCard
              icon="fa-certificate"
              title="الشهادة الإعدادية"
              text="ضمن مسيرته في تأهيل المعلمين"
            />

            <EducationCard
              icon="fa-scroll"
              title="دبلوم المعلمين الأولي"
              text="استكمال التأهيل التربوي"
            />

            <EducationCard
              icon="fa-school"
              title="الشهادة الثانوية"
              text="مرحلة أخرى من التحصيل"
            />

            <EducationCard
              icon="fa-scale-balanced"
              title="الشريعة والقانون"
              text="تخرج عام 1983م بتقدير جيد جدًا مرتفع"
            />

          </div>

        </section>


        {/* TIMELINE */}
        <section className="section">

          <SectionHeading
            kicker="المسيرة المهنية"
            title="رحلة الأستاذ حمود"
            icon="fa-timeline"
          />

          <div className="timeline">

            <TimelineItem
              year="1970م"
              title="مدرسة محمد بن زياد"
              text="أُرسل إلى مدرسة محمد بن زياد في عزلة بني وهبان بناحية السلام، ومكث فيها سنة كاملة في تعليم الطلاب، ثم قام بتقييمهم علميًا وتصعيدهم إلى الصفين الرابع والخامس."
            />

            <TimelineItem
              year="الدورة الأولى للمعلمين"
              title="المرتبة الأولى"
              text="شارك في دورة معلمي محافظات تعز وإب والحديدة، والتي أقيمت في مدرسة الزبيري بمنطقة الاجينات، وحقق فيها الترتيب الأول على مستوى المحافظات الثلاث."
            />

            <TimelineItem
              year="1974م"
              title="العودة إلى مدرسة جعفر الطيار"
              text="أُرسل معلمًا إلى مدرسة جعفر الطيار، وافتتح بطلابه الذين سبق أن درسوا على يديه الصف السادس."
            />

            <TimelineItem
              year="الدورة الثانية"
              title="المرتبة الثانية"
              text="شارك في الدورة الثانية التي أقيمت في مدرسة الشعب، وحقق المرتبة الثانية على مستوى محافظات تعز وإب والحديدة."
            />

            <TimelineItem
              year="1974م وما بعدها"
              title="مدرسة التصحيح"
              text="أسس وأدار مدرسة التصحيح في سوق الربوع بني شعب، والتي بدأت بخمسة فصول من الزنك، ثم تطورت في عهده حتى حصلت على معمل علمي متكامل."
            />

            <TimelineItem
              year="1972 — 1974م"
              title="العمل التعاوني"
              text="كان عنصرًا فاعلًا في هيئات التعاون والتطوير، وأسهم في مشاريع الطرق والمدارس وخدمة المجتمع."
            />

            <TimelineItem
              year="1978م"
              title="الانتقال إلى التوجيه التربوي"
              text="انتقل من الإدارة المباشرة للتعليم إلى ميدان التوجيه التربوي، مواصلًا مسيرته في خدمة التربية."
            />

            <TimelineItem
              year="لاحقًا"
              title="قيادة التعليم في المحافظة"
              text="عُين نائبًا لمدير المركز التعليمي لمدة ثماني سنوات، ثم مديرًا للمركز، ثم مديرًا لإدارة التخطيط والإحصاء والمشاريع."
            />

            <TimelineItem
              year="ختام المسيرة الحكومية"
              title="مستشارًا لوزارة التربية والتعليم"
              text="توجت مسيرته بصدور قرار جمهوري قضى بتعيينه مستشارًا لوزارة التربية والتعليم."
            />

            <TimelineItem
              year="1993م"
              title="الاستقالة والمشاركة العامة"
              text="قدم استقالته من العمل، رغبة منه في خوض التجربة الديمقراطية والمشاركة في الانتخابات النيابية."
            />

          </div>

        </section>


        {/* SCHOOL */}
        <section className="section">

          <SectionHeading
            kicker="المنارة التربوية"
            title="مدرسة التصحيح"
            icon="fa-school"
          />

          <div className="school">

            <div className="school-number">
              مدرسة في قلب شرعب
            </div>

            <h3>
              التصحيح
            </h3>

            <div className="school-location">
              سوق الربوع — بني شعب — شرعب السلام
            </div>

            <p>
              كانت مدرسة التصحيح واحدة من أبرز المحطات
              في مسيرة الأستاذ حمود الطيار. بدأت متواضعة
              بخمسة فصول من الزنك، إلى جانب دكان استُؤجر
              ليكون مخزنًا للمدرسة.
              <br /><br />
              وخلال فترة إدارته الحكيمة لها، تمكنت المدرسة
              من الحصول على معمل علمي متكامل، أسوة بمدارس
              مدينة تعز الكبرى، وكان منحة مقدمة من دولة ليبيا.
            </p>

            <div className="school-facts">

              <SchoolFact
                value="5"
                label="فصول عند البداية"
              />

              <SchoolFact
                value="معمل علمي"
                label="تم توفيره للمدرسة"
              />

              <SchoolFact
                value="سوق الربوع"
                label="بني شعب"
              />

            </div>

          </div>

        </section>


        {/* ACHIEVEMENTS */}
        <section className="section">

          <SectionHeading
            kicker="أبرز الإنجازات"
            title="محطات مضيئة في مسيرته"
            icon="fa-award"
          />

          <div className="achievement-grid">

            <Achievement
              icon="fa-trophy"
              title="المركز الأول"
              text="حقق المرتبة الأولى على مستوى محافظات تعز وإب والحديدة في الدورة الأولى للمعلمين."
            />

            <Achievement
              icon="fa-medal"
              title="المركز الثاني"
              text="كرر التميز في الدورة الثانية محرزًا المرتبة الثانية على مستوى المحافظات الثلاث."
            />

            <Achievement
              icon="fa-school"
              title="مدرسة التصحيح"
              text="أدار مدرسة التصحيح وأسهم في تطويرها وتجهيزها بمعمل علمي متكامل."
            />

            <Achievement
              icon="fa-road"
              title="خدمة المجتمع"
              text="أسهم في شق الطرق وإنشاء المدارس ضمن أعمال التعاونيات في ناحية السلام."
            />

            <Achievement
              icon="fa-shield-halved"
              title="النزاهة"
              text="عُرف بالصرامة في حماية العملية التعليمية ومحاربة الغش والفساد."
            />

            <Achievement
              icon="fa-building-columns"
              title="مستشار وزارة التربية"
              text="توج مسيرته المهنية بقرار جمهوري بتعيينه مستشارًا لوزارة التربية والتعليم."
            />

          </div>

        </section>


        {/* STUDENTS */}
        <section className="section">

          <SectionHeading
            kicker="أثره في الأجيال"
            title="من تلاميذه"
            icon="fa-people-group"
          />

          <div className="students">

            <Student
              icon="fa-user-doctor"
              name="الدكتور علي سعيد سلطان"
              text="استشاري الجراحة المعروف لاحقًا."
            />

            <Student
              icon="fa-user"
              name="حمود خالد عبده إسماعيل"
              text="من الطلاب الذين درسوا على يديه."
            />

            <Student
              icon="fa-user"
              name="محمد مهيوب غالب"
              text="من طلابه في مسيرته التعليمية."
            />

          </div>

          <div className="story students-story">

            <p>
              وتذكر السيرة أن عددًا كبيرًا ممن تخرجوا على يديه
              أصبحوا أطباء ومهندسين ودكاترة جامعات وقادة وعلماء،
              وتبوؤوا مناصب مختلفة وتركوا أثرًا في المجتمع والوطن.
            </p>

          </div>

        </section>


        {/* VALUES */}
        <section className="section">

          <SectionHeading
            kicker="القيم التي حملها"
            title="إرثه الحقيقي"
            icon="fa-heart"
          />

          <div className="values">

            <Value icon="fa-scale-balanced" text="النزاهة" />
            <Value icon="fa-shield-heart" text="الأمانة" />
            <Value icon="fa-book-open" text="العلم" />
            <Value icon="fa-people-roof" text="خدمة المجتمع" />
            <Value icon="fa-person-chalkboard" text="بناء الإنسان" />
            <Value icon="fa-handshake" text="المسؤولية" />
            <Value icon="fa-road" text="التنمية" />
            <Value icon="fa-flag" text="الوطنية" />

          </div>

        </section>


        {/* PHILOSOPHY */}
        <section className="section">

          <SectionHeading
            kicker="فلسفة في الحياة"
            title="الاستثمار الحقيقي"
            icon="fa-lightbulb"
          />

          <div className="story">

            <p>
              كان الأستاذ حمود يرى أن التعليم هو طوق النجاة
              الأوحد للبلاد، والحادي نحو النهضة الأشمل،
              وأن المساس بالتعليم أو تشويه قدسيته هو هدم
              لكل جميل.
            </p>

            <p>
              وفي ختام حديثه، أكد أنه طوال مسيرته لم يُدخل
              جيبه ريالًا واحدًا من حرام، وأن كل ما استطاع
              ادخاره من عرق جبينه كان منزلًا متواضعًا من
              أربع غرف وحمامين ومطبخ.
            </p>

            <p>
              ومع ذلك كان يراه بعين القناعة والاعتزاز
              كأنه «ناطحة سحاب»، مؤمنًا بأن الاستثمار الحقيقي
              والتنمية الكبرى إنما تكون في
              <strong> بناء البشر لا الحجر</strong>.
            </p>

          </div>

        </section>


        {/* QUOTE */}
        <section className="section">

          <div className="quote">

            <i className="fa-solid fa-quote-right"></i>

            <p>
              «الاستثمار الحقيقي والتنمية الكبرى
              إنما تكون في بناء البشر لا الحجر.»
            </p>

            <small>
              من حديث الأستاذ حمود علي مهيوب الطيار
            </small>

          </div>

        </section>


        {/* LEGACY */}
        <section className="section">

          <SectionHeading
            kicker="الإرث"
            title="أستاذ الأجيال"
            icon="fa-seedling"
          />

          <div className="story">

            <p>
              لم تقتصر مسيرة الأستاذ حمود علي مهيوب الطيار
              على التدريس داخل الفصل، بل امتدت إلى الإدارة
              والتوجيه والتخطيط والمشاريع والعمل التعاوني
              وخدمة المجتمع.
            </p>

            <p>
              ومن خلال عقود من العمل التربوي، أسهم في تعليم
              أجيال كان من بينها أطباء ومهندسون وأساتذة جامعات
              وقادة وعلماء، وهو ما يجعل أثره يتجاوز سنوات
              الوظيفة إلى أجيال كاملة.
            </p>

            <p>
              وبقيت النزاهة والأمانة والتمسك بالمبادئ
              من أبرز السمات التي ارتبطت بسيرته،
              حتى غدا في ذاكرة أبناء شرعب نموذجًا
              للمعلم والمربي وخادم المجتمع.
            </p>

          </div>

        </section>


        {/* SOURCES */}
        <section className="section">

          <SectionHeading
            kicker="التوثيق"
            title="مصدر السيرة"
            icon="fa-file-shield"
          />

          <div className="sources">

            <Source>
              السيرة الواردة ضمن مادة «قناديل».
            </Source>

            <Source>
              المعلومات المتعلقة بالمسيرة التعليمية والمهنية
              مأخوذة من النص المقدم للتوثيق.
            </Source>

            <Source>
              يمكن إضافة الوثائق والصور والشهادات والمصادر
              الأصلية لاحقًا بعد التحقق منها.
            </Source>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <strong>
          قناديل شرعب
        </strong>

        <span>
          أثرٌ من نور القرآن
        </span>

      </footer>

    </div>
  );
};


/* =========================
   COMPONENTS
========================= */

const SectionHeading = ({ kicker, title, icon }) => (
  <div className="heading">

    <div className="kicker">
      {kicker}
    </div>

    <h2 className="title">
      <i className={`fa-solid ${icon}`}></i>
      {title}
    </h2>

  </div>
);


const InfoCard = ({ icon, label, value }) => (
  <div className="info-card">

    <div className="info-icon">
      <i className={`fa-solid ${icon}`}></i>
    </div>

    <span>{label}</span>

    <strong>{value}</strong>

  </div>
);


const EducationCard = ({ icon, title, text }) => (
  <div className="education-card">

    <i className={`fa-solid ${icon}`}></i>

    <h3>{title}</h3>

    <p>{text}</p>

  </div>
);


const TimelineItem = ({ year, title, text }) => (
  <div className="timeline-item">

    <div className="timeline-year">
      {year}
    </div>

    <h3>{title}</h3>

    <p>{text}</p>

  </div>
);


const SchoolFact = ({ value, label }) => (
  <div className="school-fact">

    <strong>{value}</strong>

    <span>{label}</span>

  </div>
);


const Achievement = ({ icon, title, text }) => (
  <div className="achievement">

    <i className={`fa-solid ${icon}`}></i>

    <h3>{title}</h3>

    <p>{text}</p>

  </div>
);


const Student = ({ icon, name, text }) => (
  <div className="student">

    <strong>

      <i className={`fa-solid ${icon}`}></i>

      {name}

    </strong>

    <p>{text}</p>

  </div>
);


const Value = ({ icon, text }) => (
  <div className="value">

    <i className={`fa-solid ${icon}`}></i>

    <span>{text}</span>

  </div>
);


const Source = ({ children }) => (
  <div className="source">

    <i className="fa-solid fa-circle-check"></i>

    {children}

  </div>
);


export default HamoudPage;