
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Modern color palette
				'modern-green': {
					DEFAULT: 'hsl(120, 61%, 34%)',
					50: 'hsl(120, 60%, 97%)',
					100: 'hsl(120, 60%, 95%)',
					200: 'hsl(120, 60%, 90%)',
					300: 'hsl(120, 55%, 75%)',
					400: 'hsl(120, 55%, 60%)',
					500: 'hsl(120, 61%, 34%)',
					600: 'hsl(120, 65%, 25%)',
					700: 'hsl(120, 70%, 20%)',
					800: 'hsl(120, 75%, 15%)',
					900: 'hsl(120, 80%, 10%)',
				},
				'modern-gold': {
					DEFAULT: 'hsl(45, 96%, 53%)',
					100: 'hsl(45, 96%, 95%)',
					200: 'hsl(45, 96%, 85%)',
					300: 'hsl(45, 96%, 75%)',
					400: 'hsl(45, 96%, 65%)',
					500: 'hsl(45, 96%, 53%)',
					600: 'hsl(45, 96%, 43%)',
					700: 'hsl(45, 96%, 33%)',
				},
				'modern-red': {
					DEFAULT: 'hsl(0, 84%, 60%)',
					100: 'hsl(0, 84%, 95%)',
					200: 'hsl(0, 84%, 85%)',
					300: 'hsl(0, 84%, 75%)',
					400: 'hsl(0, 84%, 65%)',
					500: 'hsl(0, 84%, 60%)',
					600: 'hsl(0, 84%, 50%)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'modern-bounce': {
					'0%, 100%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-5px)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'modern-bounce': 'modern-bounce 1s infinite'
			},
			backgroundImage: {
				'modern-gradient': 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #fbbf24 100%)',
				'green-gradient': 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
				'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
