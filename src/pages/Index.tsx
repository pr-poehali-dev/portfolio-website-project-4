import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "Мобильное приложение E-commerce",
      description: "Современный дизайн интернет-магазина с интуитивным UX",
      image: "/img/028ed5e1-4e64-4a48-826c-b9b5d3081397.jpg",
      tags: ["UI/UX", "Mobile", "E-commerce"],
    },
    {
      title: "Корпоративный сайт IT-компании",
      description: "Минималистичный дизайн с акцентом на технологии",
      image: "/img/edd9fa5b-c425-4bb8-92d4-82ccbd725464.jpg",
      tags: ["Web Design", "Branding", "B2B"],
    },
    {
      title: "Фирменный стиль стартапа",
      description: "Полный ребрендинг с логотипом и гайдлайнами",
      image: "/img/b1e1301b-0904-431f-976c-889aa0b4d22c.jpg",
      tags: ["Branding", "Logo", "Identity"],
    },
  ];

  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Figma", level: 90 },
    { name: "Adobe Creative Suite", level: 85 },
    { name: "Prototyping", level: 80 },
    { name: "User Research", level: 75 },
    { name: "Branding", level: 88 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Проекты
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Навыки
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Обо мне
              </a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Mail" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Дизайнер
                  <span className="text-blue-600 block">интерфейсов</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Создаю современные и функциональные решения для UI/UX,
                  графического дизайна и брендинга с фокусом на пользовательский
                  опыт
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать резюме
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">
                    Довольных клиентов
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/edd9fa5b-c425-4bb8-92d4-82ccbd725464.jpg"
                  alt="Рабочее место дизайнера"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Избранные проекты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Подборка лучших работ в области UI/UX дизайна, брендинга и
              создания цифровых продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Навыки и экспертиза
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные компетенции в области дизайна и современных
              инструментов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Palette"
                    size={24}
                    className="text-blue-600 mr-3"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Дизайн-мышление
                  </h3>
                </div>
                <p className="text-gray-600">
                  Применяю человеко-ориентированный подход к решению
                  дизайнерских задач
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Users" size={24} className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    UX исследования
                  </h3>
                </div>
                <p className="text-gray-600">
                  Провожу интервью с пользователями и тестирование для
                  оптимизации интерфейсов
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Zap" size={24} className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Быстрое прототипирование
                  </h3>
                </div>
                <p className="text-gray-600">
                  Создаю интерактивные прототипы для быстрого тестирования идей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Обо мне</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Привет! Я дизайнер с 5-летним опытом создания цифровых
                  продуктов. Специализируюсь на UI/UX дизайне, брендинге и
                  создании комплексных дизайн-систем для стартапов и крупных
                  компаний.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Мой подход основан на глубоком понимании пользователей и
                  бизнес-целей. Я верю, что хороший дизайн должен быть не только
                  красивым, но и функциональным, решающим реальные проблемы
                  пользователей.
                </p>

                <p className="text-gray-600">
                  В работе использую современные инструменты и методологии: от
                  Figma и Adobe Creative Suite до Design Thinking и Agile.
                  Постоянно изучаю новые тренды и технологии в области дизайна.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="outline">
                  <Icon name="Github" size={20} className="mr-2" />
                  GitHub
                </Button>
                <Button variant="outline">
                  <Icon name="Linkedin" size={20} className="mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline">
                  <Icon name="Instagram" size={20} className="mr-2" />
                  Behance
                </Button>
                <Button variant="outline">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/b1e1301b-0904-431f-976c-889aa0b4d22c.jpg"
                  alt="Портрет дизайнера"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Готовы к сотрудничеству?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта. Буду рад помочь
            воплотить ваши идеи в жизнь!
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Mail" size={20} className="mr-2" />
            Написать мне
          </Button>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 Portfolio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
