export class Celular {
  private marca: string;
  private modelo: string;
  private os: string;
  private ram: string;
  private almacenamiento: string;
  private estaPrendido: boolean;
  private volumen: number;

  constructor(
    pMarca: string,
    pModelo: string,
    pOs: string,
    pRam?: string,
    pAlmacenamiento?: string
  ) {
    this.marca = pMarca;
    this.modelo = pModelo;
    this.os = pOs;
    this.ram = pRam ?? "4GB";
    this.almacenamiento = pAlmacenamiento ?? "64GB";
    this.estaPrendido = false;
    this.volumen = 50;
  }

  public encenderApagar(): void {
    if (this.estaPrendido === false) {
      this.estaPrendido = true;
      console.log(
        `[SISTEMA] El dispositivo modelo ${this.modelo} se ha encendido correctamente`
      );
    } else {
      console.log(`[SISTEMA] Apagando el dispositivo...`);
      this.estaPrendido = false;
    }
  }

  public mostrarInfo(): void {
    if (this.estaPrendido) {
      console.log(`
  ====================================================
  MOSTRANDO INFORMACIÓN DEL DISPOSITIVO

    Marca: ${this.marca}
    Modelo: ${this.modelo}
    Sistema Operativo (OS): ${this.os}
    Memoria RAM: ${this.ram}
    Almacenamiento Interno: ${this.almacenamiento}

  ====================================================
        `);
    } else {
      console.log("Debes encender primero el dispositivo.");
    }
  }

  public subirVolumen(): void {
    if (this.estaPrendido) {
      if (this.volumen < 100) {
        this.volumen += 1;
        console.log(`[SISTEMA] El volumen se subió 1 dígito.`);
        if (this.volumen === 100) {
          console.log(
            "[SISTEMA] El volumen ya está al máximo. Esto podría dañar tu audición."
          );
        }
      } else {
        console.log("[SISTEMA] El volumen ya se encuentra al 100%.");
      }
    } else {
      console.log("Debes encender primero el dispositivo.");
    }
  }

  public bajarVolumen(): void {
    if (this.estaPrendido) {
      if (this.volumen > 0) {
        this.volumen -= 1;
        console.log(`[SISTEMA] El volumen se bajó 1 dígito.`);
        if (this.volumen === 0) {
          console.log(
            "[SISTEMA] El volumen se ha muteado porque se ha llegado al 0%."
          );
        }
      }
    } else {
      console.log("Debes encender primero el dispositivo.");
    }
  }

  // Métodos con "SET"

  public setRam(cantRam: string): void {
    if (!this.estaPrendido) {
      if (this.ram != cantRam) {
        this.ram = cantRam;
        console.log(
          `[SISTEMA] La memoria RAM fue actualizada. Memoria RAM actual: ${this.ram}`
        );
      } else {
        console.log(
          "[SISTEMA] La memoria RAM NO fue modificada debido a que el valor ingresado es el mismo al actual."
        );
      }
    } else {
      console.log("Debes apagar primero el dispositivo.");
    }
  }

  public setAlmacenamiento(cantAlmacenamiento: string) {
    if (!this.estaPrendido) {
      if (this.almacenamiento != cantAlmacenamiento) {
        this.almacenamiento = cantAlmacenamiento;
        console.log(
          `[SISTEMA] El almacenamiento interno fue actualizado. Actual: ${this.almacenamiento}`
        );
      } else {
        console.log(
          `[SISTEMA] El almacenamiento interno NO fue actualizado debido a que el valor ingresado es el mismo al actual.`
        );
      }
    } else {
      console.log("Debes apagar primero el dispositivo.");
    }
  }

  // Métodos con "GET"

  public getRam(): void {
    if (this.estaPrendido) {
      console.log(`[SISTEMA] Memoria RAM actual: ${this.ram}`);
    } else {
      console.log("Debes encender primero el dispositivo.");
    }
  }

  public getAlmacenamiento(): void {
    if (this.estaPrendido) {
      console.log(
        `[SISTEMA] Almacenamiento interno actual: ${this.almacenamiento}`
      );
    } else {
      console.log("Debes encender primero el dispositivo.");
    }
  }

  public getOS(): void {
    if (this.estaPrendido) {
      console.log(`[SISTEMA] Sistema operativo (OS) actual: ${this.os}`);
    } else {
      console.log("Debes encender primero el dispositivo.");
    }
  }
}
