 import "../styles/HassanProfile.css";
function HassanProfile() {
  return (
    <div className="hassan-page" dir="rtl">

      {/* ================= NAVBAR ================= */}

      <nav className="hassan-navbar">

        <a href="/" className="hassan-brand">

          <div className="hassan-brand-icon">
            <i className="fa-solid fa-fire-flame-curved"></i>
          </div>

          <div>
            <div className="hassan-brand-text">
              قناديل شرعب
            </div>

            <small>
              أثرٌ من نور القرآن
            </small>
          </div>

        </a>

        <a href="/" className="hassan-back">
          <i className="fa-solid fa-arrow-right"></i>

          <span>
            العودة إلى موسوعة القناديل
          </span>
        </a>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hassan-profile-hero">

        <div className="hassan-profile-container">

          <div className="hassan-profile-image">

            <img
              src="/img/hassan.jfif"
              alt="الفقيه حسان عبد الله إسماعيل الحاج"
            />

            <div className="hassan-image-overlay"></div>

          </div>


          <div>

            <div className="hassan-profile-kicker">
              قنديل من قناديل شرعب
            </div>

            <h1 className="hassan-profile-title">
              الفقيه حسان عبد الله إسماعيل الحاج
            </h1>

            <div className="hassan-profile-location">

              <i className="fa-solid fa-location-dot"></i>

              قرية الأحد — شرقي حِميَر — شرعب الرونة

            </div>

            <div className="hassan-profile-years">
              1319هـ — 1398هـ
              &nbsp; | &nbsp;
              1901م — 1978م
            </div>

            <p className="hassan-profile-intro">

              فقيه ومعلّم للقرآن الكريم، قضى حياته في تعليم كتاب الله
              والعلوم الشرعية، وتنقّل بين عدد من مناطق شرعب وجبل حبشي،
              مؤسسًا أربع معلامات، وإمامًا وخطيبًا وأمينًا شرعيًا،
              تاركًا أثرًا امتد إلى أجيال من الحفاظ وطلاب العلم.

            </p>

            <div className="hassan-hero-tags">

              <div className="hassan-hero-tag">
                تعليم القرآن
              </div>

              <div className="hassan-hero-tag">
                الفقه والشريعة
              </div>

              <div className="hassan-hero-tag">
                الإمامة
              </div>

              <div className="hassan-hero-tag">
                الخطابة
              </div>

              <div className="hassan-hero-tag">
                التعليم
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <main className="hassan-content">


        {/* المعلومات الأساسية */}

        <section className="hassan-section">

          <div className="hassan-section-heading">

            <div className="hassan-section-kicker">
              بطاقة التوثيق
            </div>

            <h2 className="hassan-section-title">
              <i className="fa-solid fa-circle-info"></i>
              معلومات أساسية
            </h2>

          </div>


          <div className="hassan-info-grid">

            <InfoCard
              icon="fa-calendar-days"
              title="سنة الميلاد"
              value="1319هـ / 1901م"
            />

            <InfoCard
              icon="fa-moon"
              title="سنة الوفاة"
              value="1398هـ / 1978م"
            />

            <InfoCard
              icon="fa-location-dot"
              title="مكان الميلاد"
              value="قرية الأحد — شرقي حِميَر"
            />

            <InfoCard
              icon="fa-mosque"
              title="مجال العمل"
              value="التعليم والإمامة والخطابة"
            />

            <InfoCard
              icon="fa-book-quran"
              title="أبرز اهتماماته"
              value="القرآن والعلوم الشرعية"
            />

            <InfoCard
              icon="fa-school"
              title="عدد المعلامات"
              value="أربع معلامات"
            />

          </div>

        </section>


        {/* السيرة */}

        <section className="hassan-section">

          <SectionHeading
            kicker="السيرة"
            title="سيرته ورحلته مع العلم"
            icon="fa-book-open"
          />

          <div className="hassan-story">

            <p>
              في أفياء وادي الفل، وبالتحديد في قرية
              <strong> الأحد </strong>
              بشرقي حِميَر شرعب الرونة، ولد الفقيه حسان عبد الله إسماعيل
              الحاج عام
              <strong> 1319هـ الموافق 1901م</strong>.
            </p>

            <p>
              عاش صباه في كنف أسرة محبة لكتاب الله وتعليمه،
              وعلى يد والده تعلم القراءة والكتابة، وحفظ ما تيسر
              من الذكر الحكيم، مما أنار بصيرته في وقت مبكر.
            </p>

            <p>
              ولم يكد يبلغ أشده حتى تصدّر للإمامة والتعليم
              في مسجد القرية، غير أن شغفه بطلب المزيد من العلم
              دفعه إلى السفر إلى مدينة
              <strong> زبيد </strong>
              مدينة العلم والعلماء آنذاك.
            </p>

            <p>
              وبين أروقة أربطتها العتيقة، جلس إلى شيوخها،
              فأتقن كتاب الله الكريم حفظًا وتجويدًا وتفسيرًا،
              ونهل من علوم الشريعة كالفقه وأصوله والسيرة والحديث،
              إلى جانب اللغة العربية وآدابها وعلم المواريث.
            </p>

            <p>
              وعاد من زبيد إلى مسقط رأسه حاملًا نور العلم،
              ليبدأ مرحلة جديدة من التنوير والتعليم،
              وليصبح أحد الرجال الذين كان لهم أثر واضح في تعليم
              القرآن والعلوم لأبناء المنطقة.
            </p>

          </div>

        </section>


        {/* العلوم */}

        <section className="hassan-section">

          <SectionHeading
            kicker="العلوم التي تلقاها"
            title="مجالات العلم"
            icon="fa-graduation-cap"
          />

          <div className="hassan-knowledge-grid">

            <KnowledgeCard
              icon="fa-book-quran"
              title="القرآن الكريم"
              text="حفظًا وتجويدًا وتفسيرًا"
            />

            <KnowledgeCard
              icon="fa-scale-balanced"
              title="الفقه"
              text="الفقه وأصوله"
            />

            <KnowledgeCard
              icon="fa-scroll"
              title="الحديث والسيرة"
              text="علوم الحديث والسيرة"
            />

            <KnowledgeCard
              icon="fa-language"
              title="اللغة العربية"
              text="اللغة وآدابها"
            />

            <KnowledgeCard
              icon="fa-calculator"
              title="المواريث"
              text="علم المواريث"
            />

            <KnowledgeCard
              icon="fa-calculator"
              title="الحساب"
              text="تعليم الحساب للطلاب"
            />

            <KnowledgeCard
              icon="fa-feather"
              title="النحو"
              text="تعليم مبادئ النحو"
            />

            <KnowledgeCard
              icon="fa-chalkboard-user"
              title="التعليم"
              text="تعليم القرآن والعلوم"
            />

          </div>

        </section>


        {/* المعلامات */}

        <section className="hassan-section">

          <SectionHeading
            kicker="أثره التعليمي"
            title="المعلامات الأربع"
            icon="fa-school"
          />

          <div className="hassan-maalamat-grid">

            <Maalama
              number="المعلامة الأولى"
              title="معلامته في مسقط رأسه"
              location="قرية الأحد — شرعب الرونة"
              text="أسس معلامته الأولى في قريته، وأصبحت قبسًا يمتد أثره إلى القرى المجاورة، فتقاطر إليه طلاب العلم، وتخرجت على يديه أجيال أتقنت التلاوة والتجويد وتعلمت النحو والحساب."
            />

            <Maalama
              number="المعلامة الثانية"
              title="معلامة العقيرة"
              location="العقيرة — مديرية جبل حبشي"
              text="استجاب لطلب الشيخ علي بن حسان، وانتقل إلى قرية العقيرة، حيث أنشأ معلامته الثانية، وكان من طلابه هناك محمد وأحمد، نجلا الشيخ علي حسان."
            />

            <Maalama
              number="المعلامة الثالثة"
              title="معلامة القلعة"
              location="القلعة — الزغارير"
              text="انتقل بعدها إلى قرية القلعة في الزغارير، وأنشأ معلامته الثالثة، معلمًا لأبنائها وغارسًا في نفوس أهاليها مبادئ الدين وأحكام الشريعة."
            />

            <Maalama
              number="المعلامة الرابعة"
              title="معلامته في الجامع"
              location="مسقط رأسه"
              text="عاد إلى قريته، وشارك أبناءها في توسيع الجامع وبناء مقصورة تابعة له، لتكون مقر معلامته الرابعة، فكان فيها معلمًا، وفي المحراب إمامًا، ومن على المنبر خطيبًا."
            />

          </div>

        </section>


        {/* رحلة العطاء */}

        <section className="hassan-section">

          <SectionHeading
            kicker="محطات من حياته"
            title="رحلة العطاء"
            icon="fa-route"
          />

          <div className="hassan-journey">

            <Journey
              number="المحطة الأولى"
              title="الأحد — شرعب الرونة"
              text="وُلد في قرية الأحد، وتعلم القراءة والكتابة وحفظ القرآن على يد والده، ثم تصدر للإمامة والتعليم في مسجد القرية."
            />

            <Journey
              number="المحطة الثانية"
              title="زبيد — مدينة العلم"
              text="سافر إلى زبيد طلبًا للمزيد من العلم، وجلس إلى شيوخها، وتلقى علوم القرآن والفقه والسيرة والحديث واللغة العربية والمواريث."
            />

            <Journey
              number="المحطة الثالثة"
              title="العقيرة — جبل حبشي"
              text="استجاب لطلب الشيخ علي بن حسان، وأنشأ معلامته الثانية، وقضى أعوامًا في تعليم أبناء المنطقة."
            />

            <Journey
              number="المحطة الرابعة"
              title="القلعة — الزغارير"
              text="أنشأ معلامته الثالثة، مواصلًا تعليم أبناء المنطقة ونشر مبادئ الدين وأحكام الشريعة."
            />

            <Journey
              number="المحطة الخامسة"
              title="مدرسة المجيرين — بني سلمان"
              text="مع بزوغ التعليم النظامي، عمل مدرسًا في مدرسة المجيرين ببني سلمان لفترة وجيزة، قبل أن يعود إلى قريته."
            />

            <Journey
              number="المحطة الأخيرة"
              title="العودة إلى مسقط الرأس"
              text="عاد إلى قريته وواصل التعليم والإمامة والخطابة والعمل أمينًا شرعيًا، واستمر على هذا النهج حتى آخر أيام حياته."
            />

          </div>

        </section>


        {/* الأدوار */}

        <section className="hassan-section">

          <SectionHeading
            kicker="أدواره في المجتمع"
            title="لم يكن معلّمًا فقط"
            icon="fa-user-tie"
          />

          <div className="hassan-roles">

            <Role icon="fa-book-quran" text="معلّم للقرآن الكريم" />
            <Role icon="fa-mosque" text="إمام" />
            <Role icon="fa-microphone-lines" text="خطيب" />
            <Role icon="fa-file-signature" text="أمين شرعي" />

          </div>

        </section>


        {/* الشيوخ والتلاميذ */}

        <section className="hassan-section">

          <SectionHeading
            kicker="سلسلة العلم"
            title="شيوخه وتلاميذه"
            icon="fa-people-group"
          />

          <div className="hassan-people-grid">

            <div className="hassan-people-box">

              <h3>شيوخه</h3>

              <div className="hassan-person">
                <i className="fa-solid fa-user-graduate"></i>
                شيوخ زبيد الذين تلقى العلم على أيديهم
              </div>

              <div className="hassan-person">
                تلقى علوم القرآن والفقه والسيرة والحديث واللغة والمواريث.
              </div>

            </div>


            <div className="hassan-people-box">

              <h3>من تلاميذه المذكورين</h3>

              <div className="hassan-person">
                <i className="fa-solid fa-user"></i>
                محمد — نجل الشيخ علي حسان
              </div>

              <div className="hassan-person">
                <i className="fa-solid fa-user"></i>
                أحمد — نجل الشيخ علي حسان
              </div>

              <div className="hassan-person">
                وتخرج على يديه أجيال من الحفاظ والدعاة وطلاب العلم.
              </div>

            </div>

          </div>

        </section>


        {/* الإرث */}

        <section className="hassan-section">

          <SectionHeading
            kicker="الإرث والأثر"
            title="أثرٌ امتد عبر الأجيال"
            icon="fa-seedling"
          />

          <div className="hassan-story">

            <p>
              لم يكن أثر الفقيه حسان عبد الله إسماعيل الحاج
              محصورًا في قرية واحدة؛ فقد تنقل بين عدة مناطق،
              وأنشأ أربع معلامات، واستقبل طلاب العلم، وأسهم
              في تخريج أجيال أتقنت التلاوة والتجويد وتعلمت
              النحو والحساب والعلوم الشرعية.
            </p>

            <p>
              كما جمع بين أدوار متعددة في خدمة مجتمعه؛
              فكان معلمًا، وإمامًا، وخطيبًا، وأمينًا شرعيًا،
              يحرر عقود الناس ويحفظ حقوقهم ويرشدهم.
            </p>

            <p>
              واستمر في هذا العطاء حتى آخر أيام حياته،
              تاركًا وراءه أثرًا علميًا وتربويًا امتد إلى
              مناطق وقرى متعددة.
            </p>

          </div>

        </section>


        {/* الاقتباس */}

        <section className="hassan-section">

          <div className="hassan-quote">

            <i className="fa-solid fa-quote-right"></i>

            <p>
              «رحم الله الفقيه حسان عبد الله إسماعيل الحاج،
              وجعل ما قدمه في ميزان حسناته يوم العرض عليه.»
            </p>

            <small>
              من سيرة الفقيه حسان عبد الله إسماعيل الحاج
            </small>

          </div>

        </section>


        {/* الرحيل */}

        <section className="hassan-section">

          <SectionHeading
            kicker="خاتمة الرحلة"
            title="الرحيل"
            icon="fa-dove"
          />

          <div className="hassan-story">

            <p>
              في عام
              <strong> 1398هـ الموافق 1978م </strong>
              وبعد رحلة حافلة بالبذل والعطاء، رحل الفقيه
              حسان عبد الله إسماعيل الحاج عن الحياة الدنيا،
              بعد أن أمضى سنوات طويلة في تعليم القرآن الكريم
              والعلوم الشرعية وخدمة الناس.
            </p>

            <p className="hassan-death">
              رحمه الله رحمة واسعة،
              وجعل ما قدمه في ميزان حسناته.
            </p>

          </div>

        </section>


        {/* المصادر */}

        <section className="hassan-section">

          <SectionHeading
            kicker="التوثيق"
            title="مصادر المعلومات"
            icon="fa-file-shield"
          />

          <div className="hassan-sources">

            <div className="hassan-source">
              <i className="fa-solid fa-circle-check"></i>
              سيرة الفقيه حسان عبد الله إسماعيل الحاج — ضمن مادة «قناديل»
            </div>

            <div className="hassan-source">
              <i className="fa-solid fa-circle-check"></i>
              المعلومات الواردة في المادة التوثيقية المقدمة للمشروع
            </div>

            <div className="hassan-source">
              <i className="fa-solid fa-circle-info"></i>
              بعض التفاصيل التي لم ترد في المصدر ستظهر لاحقًا
              بعد التحقق منها وإضافتها إلى الأرشيف.
            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="hassan-footer">

        <strong>
          قناديل شرعب
        </strong>

        <span>
          أثرٌ من نور القرآن
        </span>

      </footer>

    </div>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function InfoCard({ icon, title, value }) {
  return (
    <div className="hassan-info-card">

      <div className="hassan-info-icon">
        <i className={`fa-solid ${icon}`}></i>
      </div>

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}


function SectionHeading({ kicker, title, icon }) {
  return (
    <div className="hassan-section-heading">

      <div className="hassan-section-kicker">
        {kicker}
      </div>

      <h2 className="hassan-section-title">
        <i className={`fa-solid ${icon}`}></i>
        {title}
      </h2>

    </div>
  );
}


function KnowledgeCard({ icon, title, text }) {
  return (
    <div className="hassan-knowledge-card">

      <i className={`fa-solid ${icon}`}></i>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function Maalama({ number, title, location, text }) {
  return (
    <div className="hassan-maalama">

      <div className="hassan-maalama-number">
        {number}
      </div>

      <h3>{title}</h3>

      <div className="hassan-maalama-location">
        {location}
      </div>

      <p>{text}</p>

    </div>
  );
}


function Journey({ number, title, text }) {
  return (
    <div className="hassan-journey-item">

      <div className="hassan-journey-number">
        {number}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function Role({ icon, text }) {
  return (
    <div className="hassan-role">

      <i className={`fa-solid ${icon}`}></i>

      <span>{text}</span>

    </div>
  );
}


export default HassanProfile;