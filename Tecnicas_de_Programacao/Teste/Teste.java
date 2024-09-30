package Tecnicas_de_Programacao.Teste;

import java.util.ArrayList;
import java.util.Scanner;

public class Teste{
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
		ArrayList<String> lista = new ArrayList<>();
		boolean isAtivo = true;
		int tentativas = 10;
        int tentativaAcertada;
		
		
		System.out.println("=========================================================================\n");
		System.out.println("    Este é um jogo de adivinhação.\n"
						  +"    Eu computador, escolho um número aleatorio entre 0 e 100.\n"
						  +"    E você tem 10 tentativas para acertar qual número eu escolhi.\n");
		System.out.println("=========================================================================\n\n");
		
		int numeroAleatorio = (int) (Math.random() * 1001);
		
		//System.out.println("Número aleatório: [" + numeroAleatorio + "]\n\n");
		
		while (isAtivo) {
			System.out.print("Você tem " + tentativas + " para adivinhar qual número eu escolhi? ");
			int numero = entrada.nextInt();
			
			if(numero < 0 || numero > 1000) {
				System.out.println("=========================================================================\n");
				System.out.println("\nO número digitado foi [" + numero +"].\n\nDigite um número entre 0 e 100.\n\n");
				System.out.println("=========================================================================\n");
			} else {
				if (tentativas <= 1) {
					System.out.println("=========================================================================\n");
					System.out.println("Que pena você PERDEU.\n"
									  +"O número que o computador escolheu foi [" + numeroAleatorio + "].\n");
					lista.add((11 - tentativas) + "ª tentativa [" + numero + "] ≠ " + "[" + numeroAleatorio + "]. GAME OVER!!!");
					
					for(int i = 0; i < lista.size(); i++) {
						System.out.println(lista.get(i));
					}
					System.out.println("=========================================================================\n");
					isAtivo = false;
				} else {
					if(numero == numeroAleatorio) {
						System.out.println("=========================================================================\n");
						System.out.println("PARABÉNS! Você GANHOU quando escolheu [" + numero + "] na "+ tentativas +"ª tentativa.\n"
										  +"O número que o computador escolheu foi [" + numeroAleatorio + "].\n");
						lista.add((11 - tentativas) + "ª tentativa [" + numero + "] = " + "[" + numeroAleatorio + "]. PARABÉNS!!!");
						tentativaAcertada = 11 - tentativas;
						for(int i = 0; i < lista.size(); i++) {
							System.out.println(lista.get(i));
						}
						System.out.println("=========================================================================\n");
						isAtivo = false;
					} else {
						if(numero < numeroAleatorio) {
							System.out.println("=========================================================================\n");
							System.out.println("O número [" + numero + "] que VOCÊ escolheu é MENOR que o escolhido pelo computador.\n");
							System.out.println("=========================================================================\n");
							lista.add((11 - tentativas) + "ª tentativa [" + numero + "] < [Número do computador].");
							tentativas--;
						} else if(numero > numeroAleatorio){
							System.out.println("=========================================================================\n");
							System.out.println("O número [" + numero + "] que VOCÊ escolheu é MAIOR que o escolhido pelo computador. \n");
							System.out.println("=========================================================================\n");
							lista.add((11 - tentativas) + "ª tentativa [" + numero + "] > [Número do computador].");
							tentativas--;
						}
						  else {
							
						}
					}
				}
			}
			
		}
			
		
		entrada.close();
    }
}
