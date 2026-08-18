 
import "../styles/AbdullahPage.css";

const AbdullahPage = () => {
  return (
    <div className="abdullah-page" dir="rtl">

      {/* ================= NAVBAR ================= */}
      <nav className="abd-navbar">
        <a href="/" className="abd-brand">
          <div className="abd-brand-icon">
            <i className="fa-solid fa-fire-flame-curved"></i>
          </div>

          <div>
            <div className="abd-brand-text">قناديل شرعب</div>
            <small>أثرٌ من نور</small>
          </div>
        </a>

        <a href="/" className="abd-back">
          <i className="fa-solid fa-arrow-right"></i>
          <span>العودة إلى موسوعة القناديل</span>
        </a>
      </nav>

      {/* ================= HERO ================= */}
      <section className="abd-hero">
        <div className="abd-hero-container">

          <div className="abd-portrait">
            <img
              src="/img/c2.jpg"
              alt="الفقيه عبدالله سيف عقلان العنتري"
            />

            <div className="abd-portrait-frame"></div>

            <div className="abd-portrait-label">
              فقيهٌ وحافظٌ ومعلّم
            </div>
          </div>

          <div className="abd-hero-content">
            <div className="abd-hero-kicker">
              القنديل الرابع والثلاثون
            </div>

            <h1 className="abd-hero-title">
              الفقيه عبدالله سيف عقلان العنتري
            </h1>

            <div className="abd-hero-subtitle">
              فقيه شرعب الرونة وحافظ القرآن والحديث
            </div>

            <div className="abd-hero-location">
              <i className="fa-solid fa-location-dot"></i>
              قرية البَطِنة — عزلة بني سميع — شرعب الرونة
            </div>

            <div className="abd-hero-years">
              1352هـ — 1414هـ | 1932م — 1994م
            </div>

            <p className="abd-hero-description">
              فقيهٌ نشأ على حب العلم، وقطع في الثانية عشرة من عمره
              الفيافي سيرًا إلى مدينة زبيد طلبًا للعلم، فعاد حافظًا
              لكتاب الله، وفقيهًا في المواريث والفرائض، وحاملًا
              لعلم الحديث، ثم جعل من معلامته ومنبر مسجد البطنة
              منارتين للتعليم والإرشاد وخدمة المجتمع.
            </p>

            <div className="abd-tags">
              <div className="abd-tag">حفظ القرآن الكريم</div>
              <div className="abd-tag">علم الحديث</div>
              <div className="abd-tag">المواريث والفرائض</div>
              <div className="abd-tag">الفقه</div>
              <div className="abd-tag">الخطابة</div>
              <div className="abd-tag">تعليم الأجيال</div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="abd-content">

        {/* ================= BASIC INFORMATION ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">بطاقة التوثيق</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-circle-info"></i>
              معلومات أساسية
            </h2>
          </div>

          <div className="abd-info-grid">

            <div className="abd-info-card">
              <div className="abd-info-icon">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <span>سنة الميلاد</span>
              <strong>1352هـ / 1932م</strong>
            </div>

            <div className="abd-info-card">
              <div className="abd-info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span>مكان الميلاد</span>
              <strong>قرية البَطِنة — بني سميع</strong>
            </div>

            <div className="abd-info-card">
              <div className="abd-info-icon">
                <i className="fa-solid fa-book-quran"></i>
              </div>
              <span>أبرز العلوم</span>
              <strong>القرآن والحديث والفقه</strong>
            </div>

            <div className="abd-info-card">
              <div className="abd-info-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <span>من أبرز ما حفظ</span>
              <strong>أكثر من 600 حديث</strong>
            </div>

            <div className="abd-info-card">
              <div className="abd-info-icon">
                <i className="fa-solid fa-mosque"></i>
              </div>
              <span>من أبرز أعماله</span>
              <strong>التعليم والخطابة والإرشاد</strong>
            </div>

            <div className="abd-info-card">
              <div className="abd-info-icon">
                <i className="fa-solid fa-calendar-xmark"></i>
              </div>
              <span>الوفاة</span>
              <strong>12 ربيع الثاني 1414هـ</strong>
            </div>

          </div>
        </section>

        {/* ================= EARLY LIFE ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">النشأة والبداية</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-seedling"></i>
              فتىً غادر قريته طلبًا للعلم
            </h2>
          </div>

          <div className="abd-story">
            <p>
              في قرية <strong>البَطِنة</strong> بعزلة بني سميع،
              شرعب الرونة، ولد الفقيه عبدالله سيف عقلان العنتري
              عام <strong>1352هـ الموافق 1932م</strong>.
            </p>

            <p>
              نشأ في كنف والديه، وحين بلغ الثانية عشرة من عمره
              أبصر فيه والده ذكاءً متوقدًا وشغفًا كبيرًا بطلب
              العلم وسرعة في الحفظ، فأرسله إلى مدينة العلم
              والعلماء <strong>زبيد</strong>.
            </p>

            <p>
              كانت الرحلة شاقة، فقد قطع الفتى الطريق
              <strong> سيرًا على الأقدام</strong>، ميممًا وجهه
              نحو مدينة زبيد، حاملاً في صدره طموحًا أكبر من سنه.
            </p>

            <p>
              وهناك بدأ فصل جديد من حياته العلمية، فصلٌ سيعود
              بعده إلى مسقط رأسه فقيهًا وحافظًا ومعلّمًا ومرجعًا
              يقصده الناس في مسائل الفقه والمواريث والفرائض.
            </p>
          </div>
        </section>

        {/* ================= ZABID ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">مدينة العلم والعلماء</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-mosque"></i>
              رحلة زبيد العلمية
            </h2>
          </div>

          <div className="abd-education-grid">

            <EducationCard
              icon="fa-road"
              title="الرحلة إلى زبيد"
              text="غادر قريته في الثانية عشرة من عمره وسار على قدميه طلبًا للعلم."
            />

            <EducationCard
              icon="fa-user-tie"
              title="رباط سليمان الأهدل"
              text="تلقى العلوم الشرعية وحفظ القرآن الكريم وتعلم التجويد."
            />

            <EducationCard
              icon="fa-book-open"
              title="رباط أحمد داؤود البطاح"
              text="درس الحديث وأصول الفقه والمواريث والفرائض."
            />

            <EducationCard
              icon="fa-book-quran"
              title="حفظ القرآن"
              text="عاد إلى بلاده وقد أنار صدره حفظ كتاب الله وتجويده."
            />

            <EducationCard
              icon="fa-scroll"
              title="علم الحديث"
              text="حفظ أكثر من ستمائة حديث نبوي شريف بحسب السيرة."
            />

            <EducationCard
              icon="fa-scale-balanced"
              title="المواريث والفرائض"
              text="أصبح مرجعًا لأبناء المنطقة في مسائل المواريث والفرائض."
            />

          </div>
        </section>

        {/* ================= QURAN ================= */}
        <section className="abd-section">

          <div className="abd-quran-section">

            <div className="abd-quran-icon">
              <i className="fa-solid fa-book-quran"></i>
            </div>

            <h3>مشعل القرآن والحديث</h3>

            <p>
              عاد الفقيه عبدالله سيف عقلان العنتري إلى قريته
              حاملًا علمًا تلقاه في رباطات زبيد، فكان القرآن
              الكريم والحديث والفقه محور رسالته العلمية،
              وجعل من علمه بابًا مفتوحًا لأبناء مجتمعه.
            </p>

            <div className="abd-quran-facts">

              <div className="abd-quran-fact">
                <strong>القرآن</strong>
                <span>حفظه وتعلم تجويده</span>
              </div>

              <div className="abd-quran-fact">
                <strong>+600</strong>
                <span>حديث نبوي شريف</span>
              </div>

              <div className="abd-quran-fact">
                <strong>الفقه</strong>
                <span>تخصص في الفرائض والمواريث</span>
              </div>

            </div>
          </div>
        </section>

        {/* ================= TIMELINE ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">محطات مضيئة</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-timeline"></i>
              رحلة الفقيه عبدالله
            </h2>
          </div>

          <div className="abd-timeline">

            <TimelineItem
              year="1352هـ / 1932م"
              title="الميلاد في البطنة"
              text="ولد الفقيه عبدالله سيف عقلان العنتري في قرية البطنة بعزلة بني سميع في شرعب الرونة."
            />

            <TimelineItem
              year="سن الثانية عشرة"
              title="الرحيل إلى زبيد"
              text="أرسله والده إلى مدينة زبيد بعد أن ظهرت عليه علامات الذكاء وسرعة الحفظ وحب طلب العلم، فقطع الطريق سيرًا على الأقدام."
            />

            <TimelineItem
              year="مرحلة الطلب"
              title="رباط سليمان الأهدل"
              text="واصل طلب العلوم الشرعية وحفظ القرآن الكريم وتجويده، وتميز بين أقرانه بقوة الذاكرة والفطنة."
            />

            <TimelineItem
              year="مرحلة متقدمة"
              title="رباط أحمد داؤود البطاح"
              text="درس علم الحديث وأصول الفقه والمواريث، وحفظ أكثر من ستمائة حديث نبوي شريف."
            />

            <TimelineItem
              year="بعد العودة"
              title="تأسيس المعلامة"
              text="عاد إلى قريته وأقبل عليه الطلاب، فكانت معلامته منارة لحفظ كتاب الله وتلاوته وتجويده وتعليم العلوم الشرعية."
            />

            <TimelineItem
              year="مرحلة العطاء"
              title="منبر مسجد البطنة"
              text="لم يحبس علمه داخل المعلامة، بل اتخذ من منبر مسجد البطنة منصة لإرشاد المجتمع وتوعيته وخطابة الناس."
            />

            <TimelineItem
              year="1376هـ"
              title="الحج الأول"
              text="حج بيت الله الحرام للمرة الأولى برفقة والده."
            />

            <TimelineItem
              year="1400هـ"
              title="الحج الثاني والانتقال إلى تبوك"
              text="حج للمرة الثانية، ثم قادته الأقدار إلى مدينة تبوك، حيث بدأ مرحلة جديدة من حياته."
            />

            <TimelineItem
              year="تبوك"
              title="إمام وخطيب مسجد الخالدية"
              text="أصبح إمامًا وخطيبًا في مسجد الخالدية، واشتهر بعذوبة صوته وإتقانه للتجويد."
            />

            <TimelineItem
              year="مرحلة متقدمة"
              title="لقاء الشيخ أبي الغيث"
              text="التقى بإمام مسجد النملة الشيخ أبي الغيث، الذي أعجب بنبوغه في المسائل الفقهية وبراعته في التلاوة والتجويد وأهداه مصحفًا ظل إرثًا عزيزًا لدى أبنائه."
            />

            <TimelineItem
              year="1414هـ"
              title="الرحيل"
              text="اشتد عليه المرض في مطلع ربيع الأول، وصابر أوجاعه قرابة أربعين يومًا، حتى توفي ليلة الجمعة في 12 ربيع الثاني 1414هـ، الموافق 14 سبتمبر 1994م."
            />

          </div>
        </section>

        {/* ================= STUDENTS ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">أثره في الأجيال</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-people-group"></i>
              تلاميذه ومن تخرج على يديه
            </h2>
          </div>

          <div className="abd-students">

            {[
              "الأستاذ حميد ناجي عبده محمد",
              "الشيخ علي حزام عبده محمد",
              "الشيخ عبد القادر دبوان عبده",
              "الأستاذ أحمد علي قائد",
              "عبد القادر حسن سيف",
              "عبده محمد عبد الرسول",
              "أحمد عبد الواسع علي",
              "محمد عبده علي",
            ].map((student, index) => (
              <div className="abd-student" key={index}>
                <strong>
                  <i className="fa-solid fa-user-graduate"></i>
                  {student}
                </strong>
              </div>
            ))}

          </div>

          <div className="abd-story abd-story-margin">
            <p>
              ولم يقتصر أثر الفقيه عبدالله سيف عقلان العنتري
              على من ذُكرت أسماؤهم، بل امتد عطاؤه إلى أجيال
              من أبناء المنطقة الذين نهلوا من علمه في المعلامة
              والمسجد، وظلت آثار ذلك التعليم ممتدة بعد رحيله.
            </p>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">أبرز المحطات</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-award"></i>
              قنديل العلم والفقه
            </h2>
          </div>

          <div className="abd-achievement-grid">

            <AchievementCard
              icon="fa-book-quran"
              title="حفظ كتاب الله"
              text="عاد من رحلته العلمية وقد أكرمه الله بحفظ كتابه الكريم وإتقان تلاوته وتجويده."
            />

            <AchievementCard
              icon="fa-scroll"
              title="أكثر من ستمائة حديث"
              text="حفظ أكثر من ستمائة حديث نبوي شريف خلال رحلته في طلب علم الحديث."
            />

            <AchievementCard
              icon="fa-scale-balanced"
              title="علم الفرائض والمواريث"
              text="أصبح مرجعًا فقهيًا لأبناء المنطقة في مسائل الفرائض والمواريث، يقصده السائلون طلبًا للفتوى."
            />

            <AchievementCard
              icon="fa-chalkboard-user"
              title="معلامة البطنة"
              text="جعل من معلامته منارة لتعليم القرآن الكريم وتلاوته وتجويده وتخريج الطلاب."
            />

            <AchievementCard
              icon="fa-microphone"
              title="الخطابة والإرشاد"
              text="كان خطيبًا مفوهًا، واتخذ من منبر مسجد البطنة وسيلة لتوعية المجتمع وإرشاده."
            />

            <AchievementCard
              icon="fa-mosque"
              title="إمام مسجد الخالدية"
              text="تولى الإمامة والخطابة في مسجد الخالدية بمدينة تبوك، واشتهر بعذوبة صوته وإتقانه للتجويد."
            />

          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">القيم والإرث</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-heart"></i>
              ما تركه من أثر
            </h2>
          </div>

          <div className="abd-values">

            <Value icon="fa-book-quran" text="القرآن الكريم" />
            <Value icon="fa-book-open" text="العلم" />
            <Value icon="fa-scale-balanced" text="الفقه" />
            <Value icon="fa-people-roof" text="تعليم الأجيال" />
            <Value icon="fa-mosque" text="عمارة المساجد" />
            <Value icon="fa-comments" text="الإرشاد" />
            <Value icon="fa-hand-holding-heart" text="خدمة المجتمع" />
            <Value icon="fa-seedling" text="أثر الأجيال" />

          </div>
        </section>

        {/* ================= QUOTE ================= */}
        <section className="abd-section">

          <div className="abd-quote">

            <i className="fa-solid fa-quote-right"></i>

            <p>
              «لم يكن العلم عنده بابًا للتميز الشخصي،
              بل رسالةً يحملها إلى الناس، ويتركها في صدور
              الأجيال من بعده.»
            </p>

            <small>
              من سيرة الفقيه عبدالله سيف عقلان العنتري
            </small>

          </div>
        </section>

        {/* ================= LEGACY ================= */}
        <section className="abd-section">

          <div className="abd-heading">
            <div className="abd-kicker">الإرث</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-lightbulb"></i>
              قنديل لا ينطفئ
            </h2>
          </div>

          <div className="abd-story">

            <p>
              لم يكن الفقيه عبدالله سيف عقلان العنتري مجرد
              طالب علم عاد إلى قريته بعد رحلة إلى زبيد، بل عاد
              حاملًا رسالة علمية جعلها محور حياته.
            </p>

            <p>
              حفظ القرآن، وتعلم الحديث والفقه والمواريث،
              ثم فتح أبواب معلامته لأبناء المنطقة، وجعل من
              المسجد منبرًا للتعليم والتوعية والإرشاد.
            </p>

            <p>
              وبين زبيد والبطنة وتبوك امتدت رحلته العلمية،
              وظل في كل محطة حاملًا للعلم، معلّمًا ومصلحًا
              ومرجعًا لمن قصده.
            </p>

            <p>
              رحل في الثاني عشر من ربيع الثاني سنة 1414هـ،
              لكن الحرف الذي علّمه، والقرآن الذي حفظه،
              والعلم الذي نشره، بقي أثرًا يتناقله الناس
              جيلاً بعد جيل.
            </p>

          </div>
        </section>

        {/* ================= FINAL ================= */}
        <section className="abd-section">

          <div className="abd-quran-section">

            <div className="abd-quran-icon">
              <i className="fa-solid fa-star-and-crescent"></i>
            </div>

            <h3>
              رحم الله فقيهنا عبدالله سيف عقلان العنتري
            </h3>

            <p>
              وجعل كل حرف علمه، وكل آية علّمها، وكل طالب
              تخرج على يديه، وكل كلمة حق وإرشاد قالها،
              في ميزان حسناته يوم لا ينفع مال ولا بنون
              إلا من أتى الله بقلب سليم.
            </p>

          </div>
        </section>

        {/* ================= SOURCES ================= */}
        <section className="abd-section">

          <div className="abd-heading">

            <div className="abd-kicker">التوثيق</div>

            <h2 className="abd-title">
              <i className="fa-solid fa-file-shield"></i>
              مصدر السيرة
            </h2>

          </div>

          <div className="abd-sources">

            <div className="abd-source">
              <i className="fa-solid fa-circle-check"></i>
              السيرة الواردة ضمن مادة «قناديل».
            </div>

            <div className="abd-source">
              <i className="fa-solid fa-circle-check"></i>
              المعلومات المتعلقة بالنشأة والرحلة العلمية
              والتعليم والخطابة مأخوذة من النص المقدم للتوثيق.
            </div>

            <div className="abd-source">
              <i className="fa-solid fa-circle-info"></i>
              يمكن إضافة الصور والوثائق والمصادر الأصلية
              لاحقًا بعد التحقق منها.
            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="abd-footer">
        <strong>قناديل شرعب</strong>
        <span>أثرٌ من نور</span>
      </footer>

    </div>
  );
};


/* ================= SMALL COMPONENTS ================= */

const EducationCard = ({ icon, title, text }) => (
  <div className="abd-education-card">
    <i className={`fa-solid ${icon}`}></i>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const TimelineItem = ({ year, title, text }) => (
  <div className="abd-timeline-item">
    <div className="abd-timeline-year">{year}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const AchievementCard = ({ icon, title, text }) => (
  <div className="abd-achievement">
    <i className={`fa-solid ${icon}`}></i>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const Value = ({ icon, text }) => (
  <div className="abd-value">
    <i className={`fa-solid ${icon}`}></i>
    <span>{text}</span>
  </div>
);

export default AbdullahPage;