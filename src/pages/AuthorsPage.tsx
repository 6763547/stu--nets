
import Header from '@/components/Header';

const AuthorsPage = () => {
  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container pt-24 pb-20 animate-fade-in">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Информация о проекте</h1>
          
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Автор</h2>
              <p className="mt-2">Скопинцев Михаил Николаевич</p>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold">Учебное заведение</h2>
              <p className="mt-2">МОБУ СОШ №1</p>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold">Проект</h2>
              <p className="mt-2">Индивидуальный проект, 11 класс</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
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
