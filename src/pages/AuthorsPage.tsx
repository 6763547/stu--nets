
import Header from '@/components/Header';

const AuthorsPage = () => {
  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container pt-20 pb-20">
        <div className="max-w-md mx-auto bg-white rounded-sm border border-gray-300 shadow-sm p-4">
          <h1 className="text-xl font-bold text-center mb-4 text-blue-600">Информация о проекте</h1>
          
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Автор</h2>
              <p className="mt-1">Скопинцев Михаил Николаевич</p>
            </div>
            
            <div className="text-center">
              <h2 className="text-lg font-semibold">Учебное заведение</h2>
              <p className="mt-1">МОБУ СОШ №1</p>
            </div>
            
            <div className="text-center">
              <h2 className="text-lg font-semibold">Проект</h2>
              <p className="mt-1">Индивидуальный проект, 11 класс</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button 
              onClick={() => window.history.back()}
              className="school-button"
            >
              Назад
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorsPage;
