package tsdb.dsl.computation;

public class BooleanComputationLessNum1 extends BooleanComputation {
	public final float a;
	public final Computation b;
	public BooleanComputationLessNum1(float a, Computation b) {
		this.a = a;
		this.b = b;
	}
	@Override
	public boolean eval(long timestamp, float[] data) {
		return a < b.eval(timestamp, data);
	}
}