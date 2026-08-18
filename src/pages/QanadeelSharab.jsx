import { useEffect, useState } from "react";
import "./QanadeelSharab.css";

const candles = [
  {
    name: "الفقيه حسان عبد الله إسماعيل الحاج",
    location: "الأحد — شرقي حِميَر — شرعب الرونة",
    year: "1901 — 1978",
    image: "/img/hassan.jfif",
    text: "فقيه ومعلّم للقرآن والعلوم الشرعية، أسس عدة معالم في شرعب وجبل حبشي، وأسهم في تخريج أجيال من طلاب العلم.",
    route: "/candles/cand1",
  },
  {
    name: "الأستاذ حمود علي مهيوب الطيار",
    location: "وادي الريم — عنشق عسيلة — شرعب السلام",
    year: "1952 —",
    image: "/img/hamoud.jpg",
    text: "أستاذ الأجيال ومدير مدرسة التصحيح، عُرف بالنزاهة والأمانة، وأسهم في بناء أجيال من الأطباء والمهندسين والعلماء.",
    route: "/candles/cand2",
  },
  {
    name: "الدكتور عبد السلام الحميري",
    location: "وادي الرِّعاء — شرعب الرونة",
    year: "1968 —",
    image: "/img/salam.jpg",
    text: "تربوي وأكاديمي حمل رسالة التعليم من شرعب إلى جيبوتي، وأسهم في بناء مؤسسات تعليمية وحماية الهوية اليمنية لدى الجالية اليمنية.",
    route: "/candles/cand3",
  },
];

function QanadeelSharab() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

    const elements = document.querySelectorAll(
      ".qanadeel-page .reveal"
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const openSearch = () => {
    const section = document.getElementById("search-section");

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      document.getElementById("searchInput")?.focus();
    }, 600);
  };

  const searchCandle = () => {
    const value = search.trim();

    if (!value) {
      alert("اكتب اسم القنديل الذي تبحث عنه");
      return;
    }

    alert(`سيتم البحث عن: ${value}`);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      searchCandle();
    }
  };

  return (
    <div className="qanadeel-page" dir="rtl">

      {/* =========================
          NAVBAR
      ========================== */}

      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        id="navbar"
      >
        <a href="#home" className="brand">
          <div className="brand-logo">
            <img
              src="/img/k.png"
              alt="قناديل شرعب"
            />
          </div>

          <div className="brand-info">
            <div className="brand-text">
              قناديل شرعب
            </div>

            <small>
              أثرٌ من نور القرآن
            </small>
          </div>
        </a>

        <div className="nav-links">
          <a href="#home">الرئيسية</a>
          <a href="#candles">القناديل</a>
          <a href="#map">الخريطة</a>
          <a href="#timeline">الخط الزمني</a>
          <a href="#archive">المكتبة</a>
          <a href="#contribute">ساهم معنا</a>
        </div>

        <button
          type="button"
          className="nav-search"
          onClick={openSearch}
          aria-label="البحث"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>

        <button
          type="button"
          className="menu-btn"
          aria-label="القائمة"
        >
          <i className="fa-solid fa-bars" />
        </button>
      </nav>

      {/* =========================
          HERO
      ========================== */}

      <section className="hero" id="home">
        <div className="hero-pattern" />

        <div className="hero-content reveal">
          <div className="hero-kicker">
            مشروع توثيقي من قلب شرعب
          </div>

          <h1>
            قناديل شرعب
          </h1>

          <div className="hero-line" />

          <div className="hero-subtitle">
            رجالٌ أضاءوا الطريق بنور القرآن
          </div>

          <p className="hero-description">
            منصة رقمية توثّق سيرة القناديل والعلماء ومعلّمي القرآن
            الذين ساهموا في نشر كتاب الله وتعليم العلم،
            وتحفظ أثرهم للأجيال القادمة.
          </p>

          <div className="hero-actions">
            <a
              href="#candles"
              className="btn btn-gold"
            >
              استكشف القناديل
              <i className="fa-solid fa-arrow-left" />
            </a>

            <a
              href="#about"
              className="btn btn-outline"
            >
              عن المشروع
            </a>
          </div>
        </div>

        <div className="scroll-down">
          اكتشف الحكاية
          <i className="fa-solid fa-chevron-down" />
        </div>
      </section>

      {/* =========================
          STATS
      ========================== */}

      <section className="stats">
        <div className="stat">
          <strong>50+</strong>
          <span>قنديل موثّق</span>
        </div>

        <div className="stat">
          <strong>12+</strong>
          <span>منطقة موثّقة</span>
        </div>

        <div className="stat">
          <strong>100+</strong>
          <span>وثيقة وصورة</span>
        </div>

        <div className="stat">
          <strong>200+</strong>
          <span>عام من الأثر</span>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}

      <section className="section" id="about">
        <div className="about">

          <div className="about-image reveal">
            <img
              src="/img/about.jfif"
              alt="قناديل شرعب"
              loading="lazy"
            />
          </div>

          <div className="about-content reveal">
            <div className="section-kicker">
              عن المشروع
            </div>

            <h2>
              لأن الأثر
              <br />
              لا ينبغي أن يُنسى
            </h2>

            <p>
              في ذاكرة شرعب رجالٌ حملوا كتاب الله،
              وعلّموه للأجيال، وأسهموا في نشر العلم والمعرفة.
            </p>

            <p>
              جاء مشروع قناديل شرعب ليجمع ما تفرّق من سيرهم
              وصورهم ووثائقهم وشهادات من عرفوهم،
              في أرشيف رقمي يحفظ هذا الإرث للأجيال القادمة.
            </p>

            <div className="quote">
              «من علّم القرآن فقد أضاء طريقًا لا ينطفئ»
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          CANDLES
      ========================== */}

      <section
        className="section candles"
        id="candles"
      >
        <div className="section-header reveal">
          <div className="section-kicker">
            موسوعة القناديل
          </div>

          <h2 className="section-title">
            من حملوا نور العلم
          </h2>

          <p className="section-description">
            تعرّف على سير القناديل الذين كان لهم أثر
            في تعليم القرآن ونشر العلم في مناطق شرعب.
          </p>
        </div>

        <div className="candle-grid">
          {candles.map((candle) => (
            <article
              className="candle-card reveal"
              key={candle.route}
            >
              <div className="candle-image">
                <img
                  src={candle.image}
                  alt={candle.name}
                  loading="lazy"
                />

                <div className="candle-year">
                  {candle.year}
                </div>
              </div>

              <div className="candle-info">
                <h3>
                  {candle.name}
                </h3>

                <div className="candle-location">
                  <i className="fa-solid fa-location-dot" />
                  {candle.location}
                </div>

                <p>
                  {candle.text}
                </p>

                <a
                  href={candle.route}
                  className="read-more"
                >
                  اقرأ السيرة
                  <i className="fa-solid fa-arrow-left" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          SEARCH
      ========================== */}

      <section
        className="section search-section"
        id="search-section"
      >
        <div className="section-header reveal">
          <div className="section-kicker">
            موسوعة مفتوحة
          </div>

          <h2 className="section-title">
            البحث عن شخصيات
          </h2>

          <p className="section-description search-description">
            ابحث بالاسم أو المنطقة أو الفترة الزمنية
            للوصول إلى السيرة التي تبحث عنها.
          </p>
        </div>

        <div className="search-box">
          <input
            id="searchInput"
            type="text"
            value={search}
            placeholder="ابحث عن اسم قنديل..."
            autoComplete="off"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onKeyDown={handleSearchKeyDown}
          />

          <button
            type="button"
            onClick={searchCandle}
            aria-label="بحث"
          >
            <i className="fa-solid fa-search" />
          </button>
        </div>
      </section>

      {/* =========================
          MAP
      ========================== */}

      <section
        className="section map-section"
        id="map"
      >
        <div className="section-header reveal">
          <div className="section-kicker">
            خريطة القناديل
          </div>

          <h2 className="section-title">
            أثرٌ ممتد في شرعب
          </h2>

          <p className="section-description">
            استكشف المناطق التي ارتبط بها القناديل
            ومعلّمو القرآن.
          </p>
        </div>

        <div className="map-wrapper reveal">
          <div className="map-lines" />

          <div className="map-label">
            شرعب
          </div>

          <div
            className="map-pin pin-1"
            title="الأحد — شرعب الرونة"
          >
            <i className="fa-solid fa-fire-flame-curved" />
          </div>

          <div
            className="map-pin pin-2"
            title="العقيرة — جبل حبشي"
          >
            <i className="fa-solid fa-fire-flame-curved" />
          </div>

          <div
            className="map-pin pin-3"
            title="القلعة — الزغارير"
          >
            <i className="fa-solid fa-fire-flame-curved" />
          </div>

          <div
            className="map-pin pin-4"
            title="بني شعب — شرعب السلام"
          >
            <i className="fa-solid fa-fire-flame-curved" />
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED
      ========================== */}

      <section className="featured">
        <div className="featured-image">
          <img
            src="/img/c2.jpg"
            alt="قنديل شرعب"
            loading="lazy"
          />
        </div>

        <div className="featured-content reveal">
          <div className="section-kicker">
            قنديل الأسبوع
          </div>

          <h2>
            الفقيه عبدالله سيف عقلان العنتري
          </h2>

          <div className="location">
            <i className="fa-solid fa-location-dot" />
            البطنة — بني سميع
          </div>
<p>
     فقيهٌ نشأ على حب العلم، وقطع في الثانية عشرة من عمره الفيافي سيرًا إلى مدينة زبيد طلبًا للعلم، فعاد حافظًا لكتاب الله، وفقيهًا في المواريث والفرائض، وحاملًا لعلم الحديث، ثم جعل من معلامته ومنبر مسجد البطنة منارتين للتعليم والإرشاد وخدمة المجتم
          </p>

          <a
            href="/candles/cand4"
            className="btn btn-gold"
            style={{ marginTop: "25px", alignSelf: "flex-start" }}
          >
            اقرأ سيرته
            <i className="fa-solid fa-arrow-left" />
          </a>
        </div>
      </section>

      {/* =========================
          TIMELINE
      ========================== */}

      <section
        className="section"
        id="timeline"
      >
        <div className="section-header reveal">
          <div className="section-kicker">
            ذاكرة الزمن
          </div>

          <h2 className="section-title">
            رحلة العلم عبر الأجيال
          </h2>

          <p className="section-description">
            محطات زمنية تسرد تاريخ تعليم القرآن والعلم في شرعب.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item reveal">
            <div className="timeline-dot" />

            <div className="timeline-year">
              1901
            </div>

            <h3>
              ميلاد الفقيه حسان
            </h3>

            <p>
              ولد الفقيه حسان عبد الله إسماعيل الحاج
              في قرية الأحد بشرقي حِميَر شرعب الرونة.
            </p>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot" />

            <div className="timeline-year">
              1920+
            </div>

            <h3>
              انتشار المعالم
            </h3>

            <p>
              امتدت حلقات التعليم والمعالم القرآنية
              إلى عدد من قرى شرعب والمناطق المجاورة.
            </p>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot" />

            <div className="timeline-year">
              1952
            </div>

            <h3>
              ميلاد الأستاذ حمود الطيار
            </h3>

            <p>
              ولد الأستاذ حمود علي مهيوب الطيار
              في وادي الريم بعزلة عنشق عسيلة في شرعب السلام.
            </p>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot" />

            <div className="timeline-year">
              1970 — 1983
            </div>

            <h3>
              مسيرة علمية وتربوية
            </h3>

            <p>
              تميز الأستاذ حمود في الدورات التعليمية،
              وواصل تحصيله حتى تخرجه من كلية الشريعة والقانون عام 1983م.
            </p>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot" />

            <div className="timeline-year">
              اليوم
            </div>

            <h3>
              حفظ الذاكرة
            </h3>

            <p>
              إطلاق مشروع قناديل شرعب لتوثيق سير هؤلاء الرجال
              وحفظ أثرهم للأجيال القادمة.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          ARCHIVE
      ========================== */}

      <section
        className="section archive"
        id="archive"
      >
        <div className="section-header reveal">
          <div className="section-kicker">
            الأرشيف
          </div>

          <h2 className="section-title">
            ذاكرة محفوظة للأجيال
          </h2>

          <p className="section-description">
            مجموعة من المواد التي يمكن توثيقها وحفظها داخل المشروع.
          </p>
        </div>

        <div className="archive-grid">

          <div className="archive-card reveal">
            <div className="archive-icon">
              <i className="fa-solid fa-book-open" />
            </div>

            <h3>
              الكتب
            </h3>

            <p>
              مؤلفات وكتب القناديل والمواد العلمية المرتبطة بهم.
            </p>
          </div>

          <div className="archive-card reveal">
            <div className="archive-icon">
              <i className="fa-solid fa-scroll" />
            </div>

            <h3>
              الوثائق
            </h3>

            <p>
              وثائق وإجازات ومخطوطات تاريخية.
            </p>
          </div>

          <div className="archive-card reveal">
            <div className="archive-icon">
              <i className="fa-solid fa-image" />
            </div>

            <h3>
              الصور
            </h3>

            <p>
              صور قديمة تحفظ ذاكرة الأشخاص والأماكن.
            </p>
          </div>

          <div className="archive-card reveal">
            <div className="archive-icon">
              <i className="fa-solid fa-microphone" />
            </div>

            <h3>
              الشهادات
            </h3>

            <p>
              تسجيلات وشهادات من عاصروا القناديل.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          TESTIMONIAL
      ========================== */}

      <section className="section testimonials">
        <div className="testimonial reveal">
          <div className="quote-icon">
            <i className="fa-solid fa-quote-right" />
          </div>

          <p>
            كان الشيخ يجمع أبناء القرية كل مساء،
            ويعلّمهم كتاب الله، حتى صار القرآن رفيقًا لأجيال كاملة.
          </p>

          <div className="testimonial-author">
            شهادة من ذاكرة أحد تلاميذ القناديل
          </div>
        </div>
      </section>

      {/* =========================
          CONTRIBUTION
      ========================== */}

      <section
        className="contribute"
        id="contribute"
      >
        <div className="reveal">
          <div className="section-kicker">
            شارك في حفظ الذاكرة
          </div>

          <h2>
            هل لديك قصة أو وثيقة؟
          </h2>

          <p>
            إذا كان لديك صورة قديمة، وثيقة، تسجيل، أو معلومة
            عن أحد القناديل، ساهم معنا في توثيقها وحفظها
            للأجيال القادمة.
          </p>

          <a
            href="#"
            className="btn btn-gold"
            onClick={(event) => event.preventDefault()}
          >
            ساهم في التوثيق
            <i className="fa-solid fa-arrow-left" />
          </a>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer>
        <div className="footer-grid">

          <div>
            <div className="footer-brand">
              قناديل شرعب
            </div>

            <p className="footer-description">
              مشروع توثيقي يهدف إلى حفظ سيرة القناديل
              ومعلّمي القرآن والعلماء من أبناء شرعب،
              وإبقاء أثرهم حاضرًا للأجيال القادمة.
            </p>
          </div>

          <div>
            <h4>
              استكشف
            </h4>

            <ul>
              <li>
                <a href="#candles">
                  القناديل
                </a>
              </li>

              <li>
                <a href="#map">
                  الخريطة
                </a>
              </li>

              <li>
                <a href="#timeline">
                  الخط الزمني
                </a>
              </li>

              <li>
                <a href="#archive">
                  المكتبة
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>
              المشروع
            </h4>

            <ul>
              <li>
                <a href="#about">
                  عن قناديل شرعب
                </a>
              </li>

              <li>
                <a href="#archive">
                  منهجية التوثيق
                </a>
              </li>

              <li>
                <a href="#contribute">
                  ساهم معنا
                </a>
              </li>

              <li>
                تواصل معنا
              </li>
            </ul>
          </div>

          <div>
            <h4>
              تابع المشروع
            </h4>

            <ul>
              <li>
                <i className="fa-brands fa-facebook" />
                <span> فيسبوك</span>
              </li>

              <li>
                <i className="fa-brands fa-youtube" />
                <span> يوتيوب</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} قناديل شرعب — أثرٌ من نور القرآن
        </div>
      </footer>
    </div>
  );
}

export default QanadeelSharab;