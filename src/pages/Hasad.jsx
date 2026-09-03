import React from "react";
import "./Hasad.css";

const Hasad = () => {
  const stakeholders = [
    {
      icon: "🌾",
      title: "المزارع",
      text: "يدير مزرعته ومحاصيله ويتابع التربة والري والمياه ويبيع منتجاته."
    },
    {
      icon: "🏪",
      title: "التاجر والمشتري",
      text: "يبحث عن المحاصيل ويقارن الأسعار والجودة ويرسل طلبات الشراء."
    },
    {
      icon: "👨‍🌾",
      title: "الوكيل الزراعي",
      text: "حلقة وصل ميدانية تساعد المزارعين وتفحص المحاصيل وتوثق الجودة."
    },
    {
      icon: "🚚",
      title: "شركة النقل",
      text: "تتولى نقل المحاصيل وتتبع الشحنات من المزرعة حتى المشتري."
    },
    {
      icon: "🧪",
      title: "مورد المستلزمات",
      text: "يوفر البذور والأسمدة والمبيدات والمعدات وأدوات الري."
    },
    {
      icon: "📊",
      title: "إدارة المنصة",
      text: "تدير المستخدمين والطلبات والبيانات والتقارير وجميع أنظمة المنصة."
    }
  ];

  const problems = [
    "كثرة الوسطاء",
    "انخفاض دخل المزارع",
    "صعوبة الوصول إلى المشترين",
    "عدم وضوح أسعار المحاصيل",
    "ضعف الثقة بين الأطراف",
    "نقص الإرشاد الزراعي",
    "صعوبة متابعة التربة",
    "هدر المياه",
    "عدم معرفة مستوى الخزان",
    "ضعف تنظيم البيانات الزراعية"
  ];

  const systems = [
    ["🌾", "نظام المزارعين"],
    ["🛒", "نظام التجار والمشترين"],
    ["👨‍🌾", "نظام الوكلاء الزراعيين"],
    ["🧰", "نظام الموردين"],
    ["🚛", "نظام النقل"],
    ["📡", "إنترنت الأشياء IoT"],
    ["💧", "الري الذكي"],
    ["🛢️", "مراقبة خزان المياه"],
    ["🤖", "الذكاء الاصطناعي"],
    ["✅", "ضمان جودة المحاصيل"],
    ["📦", "نظام الطلبات"],
    ["🔔", "الإشعارات والمراسلات"],
    ["📈", "التقارير والإحصائيات"],
    ["🖥️", "لوحة التحكم"]
  ];

  return (
    <main className="hasad-page" dir="rtl">

      {/* ================= NAVBAR ================= */}
      <nav className="hasad-nav">
        <div className="hasad-container nav-inner">

          <div className="brand">
            <div className="brand-icon">🌱</div>
            <div>
              <strong>حصاد اليمن</strong>
              <span>HASAD YEMEN</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#home">الرئيسية</a>
            <a href="#problem">المشكلة</a>
            <a href="#solution">الحل</a>
            <a href="#smart">الزراعة الذكية</a>
            <a href="#systems">الأنظمة</a>
            <a href="#vision">الرؤية</a>
          </div>

          <a href="#about" className="nav-button">
            عن المشروع
          </a>

        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hasad-container hero-content">

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="pulse-dot"></span>
              مشروع تخرج — منصة زراعية ذكية
            </div>

            <h1>
              من <span>الأرض</span>
              <br />
              يبدأ <strong>الحصاد.</strong>
            </h1>

            <p className="hero-title">
              حصاد اليمن | Hasad Yemen
            </p>

            <p className="hero-description">
              المنصة الوطنية الذكية لإدارة وتسويق المحاصيل الزراعية في اليمن،
              التي تربط المزارع بالمشتري، وتربط المزرعة بالتقنية.
            </p>

            <div className="hero-actions">
              <a href="#solution" className="primary-button">
                اكتشف المشروع
                <span>←</span>
              </a>

              <a href="#smart" className="secondary-button">
                الزراعة الذكية
                <span>⌁</span>
              </a>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>IoT</strong>
                <span>مراقبة ذكية</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>إرشاد زراعي</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>بيانات مستمرة</span>
              </div>
            </div>

          </div>

          {/* SMART FARM VISUAL */}
          <div className="hero-visual">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="farm-card">

              <div className="farm-header">
                <div>
                  <span>المزرعة الذكية</span>
                  <strong>مزرعة حصاد اليمن</strong>
                </div>

                <div className="online-status">
                  <i></i>
                  متصل
                </div>
              </div>

              <div className="farm-field">
                <div className="sun">☀</div>

                <div className="field-ground">
                  <div className="plant plant-1">🌱</div>
                  <div className="plant plant-2">🌿</div>
                  <div className="plant plant-3">🌱</div>
                  <div className="plant plant-4">🌿</div>
                  <div className="plant plant-5">🌱</div>
                </div>

               
 

              </div>

              <div className="farm-metrics">

                <div className="metric">
                  <span className="metric-icon water">💧</span>
                  <div>
                    <small>رطوبة التربة</small>
                    <strong>65%</strong>
                  </div>
                  <em>مناسبة</em>
                </div>

                <div className="metric">
                  <span className="metric-icon temp">🌡</span>
                  <div>
                    <small>درجة الحرارة</small>
                    <strong>27°C</strong>
                  </div>
                  <em>طبيعية</em>
                </div>

                <div className="metric">
                  <span className="metric-icon ph">pH</span>
                  <div>
                    <small>حموضة التربة</small>
                    <strong>6.8</strong>
                  </div>
                  <em>ممتازة</em>
                </div>

              </div>

           

            

            </div>

        

           

          </div>

        </div>

 

      </section>

      {/* ================= INTRO ================= */}
      <section className="intro-section" id="about">

        <div className="hasad-container">

          <div className="section-label">
            <span>01</span>
            الفكرة
          </div>

          <div className="intro-grid">

            <div>
              <h2>
                ليست مجرد
                <span> منصة بيع.</span>
              </h2>
            </div>

            <div>
              <p className="large-text">
                حصاد اليمن منظومة رقمية متكاملة تبدأ من التربة،
                وتمر بالإنتاج والجودة والتسويق والنقل،
                وتنتهي بوصول المحصول إلى المشتري.
              </p>

              <p>
                تجمع المنصة بين الزراعة التقليدية والتقنيات الحديثة
                لتوفير بيئة رقمية تساعد المزارع على إدارة مزرعته،
                وتحسين قراراته الزراعية، والوصول إلى الأسواق بشكل أسهل.
              </p>
            </div>

          </div>

          <div className="journey">

            <div className="journey-line"></div>

            <div className="journey-item">
              <span>01</span>
              <div>🌱</div>
              <strong>التربة</strong>
            </div>

            <div className="journey-item">
              <span>02</span>
              <div>💧</div>
              <strong>المياه</strong>
            </div>

            <div className="journey-item">
              <span>03</span>
              <div>🌿</div>
              <strong>النمو</strong>
            </div>

            <div className="journey-item">
              <span>04</span>
              <div>✅</div>
              <strong>الجودة</strong>
            </div>

            <div className="journey-item">
              <span>05</span>
              <div>🛒</div>
              <strong>التسويق</strong>
            </div>

            <div className="journey-item">
              <span>06</span>
              <div>🚚</div>
              <strong>النقل</strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= PROBLEM ================= */}
      <section className="problem-section" id="problem">

        <div className="hasad-container">

          <div className="section-heading centered">
            <div className="section-label">
              <span>02</span>
              التحدي
            </div>

            <h2>
              عندما تصبح
              <span> الزراعة أصعب.</span>
            </h2>

            <p>
              يواجه القطاع الزراعي مجموعة من التحديات التي تؤثر
              على المزارع والإنتاج والسوق.
            </p>
          </div>

          <div className="problem-grid">

            {problems.map((problem, index) => (
              <div className="problem-card" key={problem}>
                <span className="problem-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="problem-icon">
                  {index % 2 === 0 ? "❗" : "❌"}
                </div>

                <h3>{problem}</h3>

                <div className="problem-line"></div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SOLUTION ================= */}
      <section className="solution-section" id="solution">

        <div className="solution-bg"></div>

        <div className="hasad-container">

          <div className="section-heading">
            <div className="section-label light">
              <span>03</span>
              الحل
            </div>

            <h2>
              منظومة واحدة
              <br />
              <span>لكل شيء.</span>
            </h2>

            <p>
              حصاد اليمن يجمع أطراف العملية الزراعية والتجارية
              في نظام رقمي واحد يبدأ من المزرعة ولا ينتهي عند البيع.
            </p>
          </div>

          <div className="solution-cards">

            <div className="solution-card big">
              <div className="solution-icon">🌱</div>
              <span>01</span>
              <h3>إدارة المزرعة</h3>
              <p>
                متابعة التربة والمياه والري والمحاصيل
                باستخدام البيانات الحقيقية القادمة من المزرعة.
              </p>

              <div className="card-decoration">01</div>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🤖</div>
              <span>02</span>
              <h3>الخدمات الذكية</h3>
              <p>
                الذكاء الاصطناعي والإرشاد الزراعي
                وتحليل بيانات النبات.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">📦</div>
              <span>03</span>
              <h3>سلسلة التوريد</h3>
              <p>
                ربط المزارع بالتجار والمصانع والمصدرين
                وشركات النقل.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SMART FARM ================= */}
      <section className="smart-section" id="smart">

        <div className="hasad-container">

          <div className="smart-header">

            <div>
              <div className="section-label">
                <span>04</span>
                الزراعة الذكية
              </div>

              <h2>
                مزرعتك...
                <br />
                <span>تتحدث معك.</span>
              </h2>
            </div>

            <p>
              من خلال إنترنت الأشياء، تصبح بيانات المزرعة
              متاحة أمام المزارع لحظة بلحظة.
            </p>

          </div>

          <div className="smart-dashboard">

            <div className="dashboard-top">

              <div>
                <small>لوحة المزرعة الذكية</small>
                <h3>مزرعة حصاد اليمن</h3>
              </div>

              <div className="device-status">
                <span></span>
                ESP32 متصل
              </div>

            </div>

            <div className="dashboard-content">

              <div className="dashboard-main">

                <div className="dashboard-chart">

                  <div className="chart-header">
                    <div>
                      <small>رطوبة التربة</small>
                      <strong>65%</strong>
                    </div>

                    <span>آخر 24 ساعة</span>
                  </div>

                  <div className="chart">
                    <div className="chart-grid"></div>

                    <svg
                      viewBox="0 0 600 220"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="areaGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(83, 184, 117, .35)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(83, 184, 117, 0)"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0,145 C60,125 75,150 120,130 S190,80 240,105 S300,140 350,100 S420,65 465,90 S530,120 600,65 L600,220 L0,220 Z"
                        fill="url(#areaGradient)"
                      />

                      <path
                        d="M0,145 C60,125 75,150 120,130 S190,80 240,105 S300,140 350,100 S420,65 465,90 S530,120 600,65"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                    </svg>

                    <div className="chart-point point-a"></div>
                    <div className="chart-point point-b"></div>
                    <div className="chart-point point-c"></div>

                  </div>

              

                </div>

                <div className="sensor-grid">

                  <div className="sensor-card">
                    <span>💧</span>
                    <small>رطوبة التربة</small>
                    <strong>65%</strong>
                    <em>مناسبة</em>
                  </div>

                  <div className="sensor-card">
                    <span>🌡</span>
                    <small>الحرارة</small>
                    <strong>27°C</strong>
                    <em>طبيعية</em>
                  </div>

                  <div className="sensor-card">
                    <span>pH</span>
                    <small>درجة الحموضة</small>
                    <strong>6.8</strong>
                    <em>ممتازة</em>
                  </div>

                  <div className="sensor-card">
                    <span>🛢</span>
                    <small>الخزان</small>
                    <strong>78%</strong>
                    <em>جيد</em>
                  </div>

                </div>

              </div>

              <div className="dashboard-side">

                <div className="tank-card">

                  <div className="tank-header">
                    <div>
                      <small>خزان المياه</small>
                      <strong>المستوى الحالي</strong>
                    </div>

                    <span>78%</span>
                  </div>

                  <div className="tank">
                    <div className="tank-water">
                      <div className="wave"></div>
                    </div>
                  </div>

                  <p>الحالة جيدة — لا يوجد تنبيه.</p>

                </div>

                <div className="irrigation-card">

                  <div className="irrigation-card-header">
                    <span>💦</span>
                    <div>
                      <small>نظام الري</small>
                      <strong>تلقائي</strong>
                    </div>
                  </div>

                  <div className="irrigation-state">
                    <strong>متوقف</strong>
                   </div>

                  <button>تشغيل الري يدويًا</button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= IRRIGATION FLOW ================= */}
      <section className="flow-section">

        <div className="hasad-container">

          <div className="section-heading centered">
            <div className="section-label">
              <span>05</span>
              الري الذكي
            </div>

            <h2>
              القرار الزراعي
              <span> المبني على البيانات.</span>
            </h2>

            <p>
              عندما تنخفض رطوبة التربة، تبدأ المنظومة في تحليل الحالة
              واتخاذ الإجراء المناسب.
            </p>
          </div>

          <div className="flow">

            <div className="flow-item">
              <div className="flow-icon">💧</div>
              <span>01</span>
              <strong>الحساس</strong>
              <p>يكتشف انخفاض رطوبة التربة.</p>
            </div>

            <div className="flow-arrow">←</div>

            <div className="flow-item">
              <div className="flow-icon">📡</div>
              <span>02</span>
              <strong>ESP32</strong>
              <p>يستقبل القراءة ويرسل البيانات.</p>
            </div>

            <div className="flow-arrow">←</div>

            <div className="flow-item">
              <div className="flow-icon">🧠</div>
              <span>03</span>
              <strong>التحليل</strong>
              <p>النظام يتحقق من مستوى الرطوبة.</p>
            </div>

            <div className="flow-arrow">←</div>

            <div className="flow-item">
              <div className="flow-icon">⚙️</div>
              <span>04</span>
              <strong>الري</strong>
              <p>تشغيل المضخة أو الصمام.</p>
            </div>

            <div className="flow-arrow">←</div>

            <div className="flow-item">
              <div className="flow-icon">🌱</div>
              <span>05</span>
              <strong>النمو</strong>
              <p>ارتفاع الرطوبة وإيقاف الري.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= AI ================= */}
      <section className="ai-section">

        <div className="ai-glow"></div>

        <div className="hasad-container ai-content">

          <div className="ai-copy">

            <div className="section-label light">
              <span>06</span>
              الذكاء الاصطناعي
            </div>

            <h2>
              عندما يحتاج
              <br />
              النبات إلى
              <span> تشخيص.</span>
            </h2>

            <p>
              يستطيع المزارع تصوير النبات أو الجزء المصاب،
              ثم إرسال الصورة إلى نظام تحليل الصور للحصول
              على إرشادات تساعده على فهم المشكلة.
            </p>

            <div className="ai-features">

              <div>
                <span>✦</span>
                <p>تحديد المرض المحتمل</p>
              </div>

              <div>
                <span>✦</span>
                <p>تحليل الأعراض</p>
              </div>

              <div>
                <span>✦</span>
                <p>إرشادات التعامل والوقاية</p>
              </div>

            </div>

            <small className="ai-note">
              النتائج إرشادية ولا تغني عن المختص الزراعي.
            </small>

          </div>

          <div className="ai-visual">

            <div className="ai-scanner">

              <div className="scan-corners">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="ai-plant">
                🌿
              </div>

              <div className="scan-line"></div>

              <div className="ai-result">

                <div className="result-icon">✓</div>

                <div>
                  <small>التحليل مكتمل</small>
                  <strong>احتمال الإصابة</strong>
                </div>

                <b>87%</b>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STAKEHOLDERS ================= */}
      <section className="stakeholder-section">

        <div className="hasad-container">

          <div className="section-heading centered">

            <div className="section-label">
              <span>07</span>
              المنظومة
            </div>

            <h2>
              الجميع في
              <span> مكان واحد.</span>
            </h2>

            <p>
              منصة تجمع جميع الأطراف المشاركة في العملية الزراعية والتجارية.
            </p>

          </div>

          <div className="stakeholder-grid">

            {stakeholders.map((item, index) => (
              <div className="stakeholder-card" key={item.title}>

                <div className="stakeholder-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>{item.icon}</div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="card-arrow">↗</span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SYSTEMS ================= */}
      <section className="systems-section" id="systems">

        <div className="hasad-container">

          <div className="systems-layout">

            <div className="systems-intro">

              <div className="section-label">
                <span>08</span>
                مكونات النظام
              </div>

              <h2>
                منظومة
                <br />
                <span>متكاملة.</span>
              </h2>

              <p>
                مجموعة من الأنظمة المترابطة تعمل معًا لبناء
                تجربة زراعية وتجارية رقمية متكاملة.
              </p>

            </div>

            <div className="systems-list">

              {systems.map((system, index) => (
                <div className="system-item" key={system[1]}>

                  <span className="system-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="system-icon">
                    {system[0]}
                  </div>

                  <strong>{system[1]}</strong>

                  <span className="system-arrow">↗</span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= MARKET ================= */}
      <section className="market-section">

        <div className="hasad-container market-content">

          <div className="market-copy">

            <div className="section-label light">
              <span>09</span>
              السوق وسلسلة التوريد
            </div>

            <h2>
              من المزرعة
              <br />
              <span>إلى المشتري.</span>
            </h2>

            <p>
              لا تتوقف المنصة عند عرض المحصول، بل تنظم
              رحلة الطلب والنقل والتسليم والتقييم.
            </p>

          </div>

          <div className="market-chain">

            <div className="chain-node">
              <span>🌾</span>
              <strong>المزارع</strong>
            </div>

            <div className="chain-line">
             </div>

            <div className="chain-node">
              <span>🛒</span>
              <strong>المشتري</strong>
            </div>

            <div className="chain-line">
             </div>

            <div className="chain-node">
              <span>🚚</span>
              <strong>النقل</strong>
            </div>

            <div className="chain-line">
             </div>

            <div className="chain-node">
              <span>📦</span>
              <strong>التسليم</strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= GOALS ================= */}
      <section className="goals-section">

        <div className="hasad-container">

          <div className="section-heading centered">

            <div className="section-label">
              <span>10</span>
              أهداف المشروع
            </div>

            <h2>
              تقنية تخدم
              <span> الإنسان والأرض.</span>
            </h2>

          </div>

          <div className="goals-grid">

            <div className="goal-card">
              <span>01</span>
              <div>💰</div>
              <h3>اقتصادي</h3>
              <p>
                تحسين وصول المزارع إلى المشترين وتقليل تكاليف التسويق.
              </p>
            </div>

            <div className="goal-card featured">
              <span>02</span>
              <div>🌱</div>
              <h3>زراعي</h3>
              <p>
                تحسين إدارة الري وتقليل هدر المياه ومتابعة حالة المزرعة.
              </p>
            </div>

            <div className="goal-card">
              <span>03</span>
              <div>🤝</div>
              <h3>اجتماعي</h3>
              <p>
                دعم المزارعين وتشجيع الشباب على العمل في الزراعة والتقنية.
              </p>
            </div>

            <div className="goal-card">
              <span>04</span>
              <div>💻</div>
              <h3>تقني</h3>
              <p>
                رقمنة العمليات الزراعية وإنشاء قاعدة بيانات زراعية منظمة.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FUTURE ================= */}
      <section className="future-section" id="vision">

        <div className="future-bg"></div>

        <div className="hasad-container">

          <div className="future-content">

            <div className="section-label light">
              <span>11</span>
              الرؤية المستقبلية
            </div>

            <h2>
              اليوم منصة.
              <br />
              <span>غدًا منظومة وطنية.</span>
            </h2>

            <p>
              يمكن تطوير حصاد اليمن مستقبلًا ليصبح بنية رقمية
              متكاملة للقطاع الزراعي، تعتمد على البيانات والذكاء
              الاصطناعي وإنترنت الأشياء.
            </p>

            <div className="future-tags">

              <span>التنبؤ بالأسعار</span>
              <span>التنبؤ بالإنتاج</span>
              <span>خرائط زراعية</span>
              <span>محطات الطقس</span>
              <span>الطاقة الشمسية</span>
              <span>دعم التصدير</span>
              <span>التمويل الزراعي</span>
              <span>الذكاء الاصطناعي</span>

            </div>

          </div>

          <div className="future-orbit">

            <div className="future-core">
              <span>🌱</span>
              <strong>حصاد</strong>
              <small>اليمن</small>
            </div>

            <div className="future-node node-1">AI</div>
            <div className="future-node node-2">IoT</div>
            <div className="future-node node-3">🌤</div>
            <div className="future-node node-4">📊</div>

          </div>

        </div>

      </section>

      {/* ================= FINAL ================= */}
      <section className="final-section">

        <div className="final-glow"></div>

        <div className="hasad-container final-content">

          <div className="final-symbol">
            🌱
          </div>

          <div className="section-label light">
            <span>12</span>
            الخلاصة
          </div>

          <h2>
            التربة
            <span> → </span>
            المياه
            <span> → </span>
            الري
            <span> → </span>
            المحصول
          </h2>

          <h3>
            ثم الجودة والتسويق والنقل...
          </h3>

          <p>
            حصاد اليمن يحول هذه الرحلة من عمليات منفصلة
            إلى منظومة رقمية واحدة، تجعل التكنولوجيا شريكًا
            حقيقيًا للمزارع.
          </p>

          <div className="final-brand">
            <strong>حصاد اليمن</strong>
            <span>HASAD YEMEN</span>
          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="hasad-footer">

        <div className="hasad-container footer-inner">

          <div className="footer-brand">
            <div className="brand-icon">🌱</div>
            <div>
              <strong>حصاد اليمن</strong>
              <span>HASAD YEMEN</span>
            </div>
          </div>

          <p>
            المنصة الوطنية الذكية لإدارة وتسويق المحاصيل الزراعية في اليمن.
          </p>

          <span className="copyright">
            مشروع تخرج © 2026
          </span>

        </div>

      </footer>

    </main>
  );
};

export default Hasad;