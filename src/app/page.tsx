export default function Home(): React.JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-white p-8">
      <div className="container-narrow text-center">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-primary-600 dark:text-primary-400">
            Cake Shop
          </h1>
          <p className="text-2xl font-semibold text-secondary-700 dark:text-secondary-300">
            Coming Soon
          </p>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            We&apos;re baking something special for you. Our delicious cakes
            and sweet treats will be available soon!
          </p>
        </div>
      </div>
    </main>
  );
}